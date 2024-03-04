"use client"

import React, {  useState } from "react";
import ReactQuill, {Quill} from 'react-quill'
import 'quill/dist/quill.snow.css'
import css from '@/styles/DashboardPages/news/texteditor.module.css'
import PreviewModal from "@/components/News/EditingForm/components/PreviewModal";

const TextEditor = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [openModal, setOpenModal] = useState(true)

    console.log("TITLE---->", title)
    console.log("BODY---->", body)


    const quill = new Quill('#editor', {
        modules: { toolbar: true },
        theme: 'snow'
    });
    let modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] }
            ],
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
        <div >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h2 style={{ textAlign: "start", fontSize: "1rem", marginBottom: "0.6rem"}}>News body:</h2>
                <textarea className={css.title_area}
                          onChange={GetTitle}
                ></textarea>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "1rem"}}>
            <h2 style={{ textAlign: "start", fontSize: "1rem", marginBottom: "0.6rem"}}>News body:</h2>
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    placeholder="write your content ...."
                    onChange={GetBody}
                >
                </ReactQuill>
            </div>
        </div>
            <button onClick={() => setOpenModal(true)}>Show Preview</button>
        </>
    );

}

export default TextEditor;



