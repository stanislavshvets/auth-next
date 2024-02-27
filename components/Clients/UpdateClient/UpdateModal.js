"use client"

import axios from "axios";
import {useForm} from "react-hook-form";
import css from "@/styles/DashboardPages/clients/UpdateBTN/upmodal.module.css";

const UpdateModal = ({id, name, phone, email, closeModal, updateClient}) => {

    const { register, watch,
        handleSubmit,
        reset,
        formState: { errors }} = useForm()

    const watchNameField = watch("name")
    const watchPhoneField = watch("phone")
    const watchEmailField = watch("email")

    const onSubmit = async (data) => {
        console.log(data);
        return data
    }

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                    <div className={css.inputwrapper}>
                            <input className={`${errors.exampleRequired ? css.error_input : css.input} 
                               ${errors.exampleRequired ? (typeof watchNameField === "string" ? (watchNameField !== '' ? css.error_focus : null) : null) : 
                                (typeof watchNameField === "string" ? (watchNameField !== '' ? css.focus : null) : null)}`}
                                   {...register("name")} />
                            <label className={errors.exampleRequired ? css.error_label : css.label}>
                                <span className={errors.exampleRequired ? css.block : css.hide}>Enter valid name</span>
                                <span className={!errors.exampleRequired ? css.block : css.hide}>Name</span>
                            </label>
                    </div>
                    <div className={css.inputwrapper}>
                        <input className={`${errors.exampleRequired ? css.error_input : css.input} 
                               ${errors.exampleRequired ? (typeof watchPhoneField === "string" ? (watchPhoneField !== '' ? css.error_focus : null) : null) :
                            (typeof watchPhoneField === "string" ? (watchPhoneField !== '' ? css.focus : null) : null)}`}
                               {...register("phone")} />
                        <label className={errors.exampleRequired ? css.error_label : css.label}>
                            <span className={errors.exampleRequired ? css.block : css.hide}>Enter valid phone</span>
                            <span className={!errors.exampleRequired ? css.block : css.hide}>Phone</span>
                        </label>
                    </div>
                    <div className={css.inputwrapper}>
                        <input className={`${errors.exampleRequired ? css.error_input : css.input} 
                               ${errors.exampleRequired ? (typeof watchEmailField === "string" ? (watchEmailField !== '' ? css.error_focus : null) : null) :
                            (typeof watchEmailField === "string" ? (watchEmailField !== '' ? css.focus : null) : null)}`}
                               {...register("email")} />
                        <label className={errors.exampleRequired ? css.error_label : css.label}>
                            <span className={errors.exampleRequired ? css.block : css.hide}>Enter valid email</span>
                            <span className={!errors.exampleRequired ? css.block : css.hide}>Email</span>
                        </label>
                    </div>
                    <div className={css.btns}>
                        <button className={css.apply_btn} type="submit" onClick={() => updateClient(id.toString())}>UPDATE<span></span></button>
                        <button className={css.cancel_btn} onClick={() => closeModal(false)}>CANCEL<span></span></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateModal;