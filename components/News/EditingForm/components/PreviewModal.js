import React from 'react';
import css from "@/styles/DashboardPages/news/previewmodal.module.css";
import { Remarkable } from 'remarkable';
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
            <div className={css.modal} >
                <h2 className={css.h2}>{title}</h2>
                <div className={css.info} dangerouslySetInnerHTML={markup}>

                </div>
            </div>
        </>
    );
};

export default PreviewModal;
