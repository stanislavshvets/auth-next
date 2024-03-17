"use client"

import Image from "next/image";
import { Remarkable } from 'remarkable';
import { cancel } from '@/components/assets/svg'
import css from "@/styles/DashboardPages/news/previewmodal.module.css";
import 'quill/dist/quill.snow.css'

const md = new Remarkable({
    html: true,
    xhtmlOut: true,
    breaks: true,
});

function renderMarkdownToHTML(markdown) {
    const renderedHTML = md.render(markdown);
    return {__html: renderedHTML};
}

const PreviewModal = ({title, body, closeModal}) => {

    const markup = renderMarkdownToHTML(body);

    return (
        <>
            <div className={css.background} ></div>
            <div className={css.modal_wrapper}>
                <div className={css.modal} >
                    <div className={css.info_container} >
                        {title === '' && markup.__html === '' ? <h2 className={css.h2}>No Data</h2> :
                            <>
                                <h2 className={css.h2}>{title === "" ? "NO TITLE" : title}</h2>
                                <div className={css.info} dangerouslySetInnerHTML={markup.__html === "" ? {__html: "NO BODY"} : markup}></div>
                            </>
                        }
                    </div>
                </div>
                <button className={css.btn} onClick={()=>closeModal(false)}>
                    <Image src={cancel} alt={"cancel"} width={15} height={15} />
                </button>
            </div>
        </>
    );
};

export default PreviewModal;
