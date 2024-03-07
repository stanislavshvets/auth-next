"use client"

import css from '@/styles/DashboardPages/news/editingform.module.css'
import TextEditor from "@/components/News/EditingForm/components/TextEditor";
import { useState } from "react";
import axios from "axios";

const EditingForm = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const postData = async (title, body) => {

        try{
            await axios.post("/api/news", {
                title,
                body
            }).then((res) => {
                console.log("RESPONSE---->" ,res)
            })
        }catch (error){
            console.log("ERROR---->" ,error)
        }
    }


    return (
        <div className={css.mainblock}>
            <TextEditor title={title} body={body} setTitle={setTitle} setBody={setBody} postData={postData}/>
        </div>
    );
};

export default EditingForm;
