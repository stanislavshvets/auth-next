"use client"

import { useState } from "react";
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
import css from '@/styles/DashboardPages/news/texteditor.module.css'
import PreviewModal from "@/components/News/EditingForm/components/PreviewModal";


const TextEditor = ({title, body, setTitle, setBody, postData}) => {

    const [openModal, setOpenModal] = useState(false)

    let modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ "color":
                    ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff",
                        "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff",
                        "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff",
                        "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2",
                        "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466",
                        'custom-color'] }],
        ]
    };

    let formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
    ];

    const GetTitle = (event) => {
        setTitle(event.target.value)
    };

    const GetBody = (content) => {
        setBody(content)
    };

    return (
        <>
            {openModal && <PreviewModal title={title} body={body} closeModal={setOpenModal}/>}
        <div>
            <div className={css.title_wrapper}>
                <h2 className={css.h2}>News title:</h2>
                <textarea className={css.title_area}
                          onChange={GetTitle}
                ></textarea>
            </div>
            <div className={css.body_wrapper}>
            <h2 className={css.h2}>News body:</h2>
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    onChange={GetBody}
                    className={css.body_area}
                >
                </ReactQuill>
            </div>
        </div>
            <div className={css.btns_container}>
                <button onClick={() => setOpenModal(prev => !prev)} className={css.preview_btn}>

                    <span className={css.text}>Show Preview</span>
                    <span className={css.circle}></span>

                </button>
                <button className={css.accept_btn} onClick={() => postData(title, body)}>
                    <svg viewBox="0 0 24 24" className={css.arr2} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076
                            18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                    <span className={css.text}>Make Post</span>
                    <span className={css.circle}></span>
                    <svg viewBox="0 0 24 24" className={css.arr1} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076
                            18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        ></path>
                    </svg>
                </button>
            </div>
        </>
    );

}

export default TextEditor;



