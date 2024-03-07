import css from '@/styles/DashboardPages/news/anews.module.css'
import { Remarkable } from 'remarkable';
import UpdateButton from "@/components/News/UpdateNews/UpdateButton";
import DelButton from "@/components/News/DelNews/DelButton";

const md = new Remarkable({
    html: true,
    xhtmlOut: true,
    breaks: true,
});

function renderMarkdownToHTML(markdown) {
    const renderedHTML = md.render(markdown);
    return {__html: renderedHTML};
}

const ANews = ({title, body, date}) => {

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
