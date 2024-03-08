import css from '@/styles/DashboardPages/news/anews.module.css'
import { Remarkable } from 'remarkable';
import dynamic from "next/dynamic";

const UpdateButton = dynamic(
    () => import("@/components/News/UpdateNews/UpdateButton"), {
    ssr: false
})
const DelButton = dynamic(
    () => import("@/components/News/DelNews/DelButton"), {
    ssr: false
})

const md = new Remarkable({
    html: true,
    xhtmlOut: true,
    breaks: true,
});

function renderMarkdownToHTML(markdown) {
    const renderedHTML = md.render(markdown);
    return {__html: renderedHTML};
}

const ANews = async ({title, body, date}) => {

    const markup = renderMarkdownToHTML(body);

    return (
        <div className={css.wrapper}>
        <div className={css.main_block}>
            <h2 className={css.h2}>{title}</h2>
            <div className={css.info} dangerouslySetInnerHTML={markup}>
            </div>
            <p>{date}</p>
        </div>
            <div className={css.btns_block}>
                <UpdateButton/>
                <DelButton/>
            </div>
        </div>
    );
};

export default ANews;
