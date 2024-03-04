"use client"

import css from '@/styles/DashboardPages/news/editingform.module.css'
import TextEditor from "@/components/News/EditingForm/components/TextEditor";

const EditingForm = () => {

    return (
        <div className={css.mainblock}>
            <h1>FORM</h1>
            <TextEditor />
        </div>
    );
};

export default EditingForm;
