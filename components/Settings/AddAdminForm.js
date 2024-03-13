"use client"

import css from "@/styles/DashboardPages/settings/addAdminform.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { admin, editor, manager, lock, unlock } from "@/components/assets/svg"



const AddAdminForm = () => {

    const [newAdmin, setNewAdmin] = useState()
    const [password, setPassword] = useState(true)

    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }} = useForm()

    if(errors) console.log(errors)

    const onSubmit = async (data) => {

        const {login, password, role } = data

        console.log(data)

        // try{
        //     await axios.post("/api/admins", {
        //         login,
        //         password,
        //         role
        //     }).then((res) => {
        //         console.log("RESPONSE---->" ,res)
        //         setNewAdmin(res.data.data)
        //     })
        //     reset()
        // }catch (error){
        //     console.log(error);
        // }
    }

    console.log("newClient---->" ,newAdmin);

    return (
        <div className={css.mainblock}>
            <div className={css.form_wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                    <input className={css.input} type={"text"} placeholder={"Login"} {...register("login", { required: true })} />
                    <div className={css.password_wrapper}>
                        <span className={css.icon} onClick={() => setPassword(prev => !prev)}>
                            {password ? <Image src={lock} alt={'lock'} width={20} height={20} /> : <Image src={unlock} alt={'unlock'} width={20} height={20} />}
                        </span>
                    <input className={css.input} type={password ? "password" : "text"} placeholder={"Password"} {...register("password", { required: true })} />
                    </div>
                    <div className={css.password_wrapper}>
                        <span className={css.icon} onClick={() => setPassword(prev => !prev)}>
                            {password ? <Image src={lock} alt={'lock'} width={20} height={20} /> : <Image src={unlock} alt={'unlock'} width={20} height={20} />}
                        </span>
                        <input className={css.input} type={password ? "password" : "text"} placeholder={"Password"} {...register("confirm_password", {
                            required: true ,
                            validate: (val) => {
                            if(watch("password") !== val) {
                                return "Your passwords do not match";
                            }
                        } })} />
                    </div>
                    <div className={css.radio_labels}>
                        <label>
                            <input className={css.radio} type="radio" value={"admin"} placeholder={"admin"} {...register("role")} />

                            <span className={css.radioTile}>
		        		        <span className={css.radioIcon}>
		        		        	<Image src={admin} alt={'admin'} width={25} height={25} />
		        		        </span>
		        		        <span className={css.radioLabel}>Admin</span>
		        	        </span>
                        </label>
                        <label>
                            <input className={css.radio} type="radio" value={"editor"} placeholder={"editor"} {...register("role")} />
                            <span className={css.radioTile}>
		        		        <span className={css.radioIcon}>
		        		        	<Image src={editor} alt={'editor'} width={25} height={25} />
		        		        </span>
		        		        <span className={css.radioLabel}>Editor</span>
		        	        </span>
                        </label>
                        <label>
                            <input className={css.radio} type="radio" value={"manager"} placeholder={"manager"} {...register("role")} />
                            <span className={css.radioTile}>
		        		        <span className={css.radioIcon}>
		        		        	<Image src={manager} alt={'manager'} width={25} height={25} />
		        		        </span>
		        		        <span className={css.radioLabel}>Manager</span>
		        	        </span>
                        </label>
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className={css.button} type="submit">

                            <div className={css.svgWrapper}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="30"
                                    height="30"
                                    class="icon"
                                >
                                    <path
                                        d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                                    ></path>
                                </svg>
                        </div>
                        <span >Save</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAdminForm;
