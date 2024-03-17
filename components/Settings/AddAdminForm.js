"use client"

import css from "@/styles/DashboardPages/settings/addAdminform.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { admin, editor, manager, lock, unlock, cloud } from "@/components/assets/svg"



const AddAdminForm = () => {

    const [newAdmin, setNewAdmin] = useState()
    const [password, setPassword] = useState(true)
    // const [strength, setStrength] = useState("");


    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }} = useForm()

    if(errors) console.log(errors)

    const onSubmit = async (data) => {

        const {login, password, role } = data

        try{
            await axios.post("/api/admins", {
                login,
                password,
                role
            }).then((res) => {
                console.log("RESPONSE---->" ,res)
                setNewAdmin(res.data.data)
            })
            reset()
        }catch (error){
            console.log(error);
        }
    }

    console.log("newAdmin---->" ,newAdmin);

    // const strengthLabels = ["weak", "medium", "strong"];
    // const getStrength = (password = watch("password")) => {
    //     console.log(password);
    //
    //     let strengthIndicator = -1;
    //
    //     let upper = false,
    //         lower = false,
    //         numbers = false;
    //
    //     for (let index = 0; index < password.length; index++) {
    //         let char = password.charCodeAt(index);
    //         if (!upper && char >= 65 && char <= 90) {
    //             upper = true;
    //             strengthIndicator++;
    //         }
    //
    //         if (!numbers && char >= 48 && char <= 57) {
    //             numbers = true;
    //             strengthIndicator++;
    //         }
    //
    //         if (!lower && char >= 97 && char <= 122) {
    //             lower = true;
    //             strengthIndicator++;
    //         }
    //     }
    //
    //     setStrength(strengthLabels[strengthIndicator] ?? "");
    // };




    // console.log("strength---->" ,strength);


    return (
        <div className={css.mainblock}>
            <div className={css.form_wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form} >

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
                            <input className={css.radio} type="radio" value={"manager"} placeholder={"manager"} {...register("role")} />
                            <span className={css.radioTile}>
		        		        <span className={css.radioIcon}>
		        		        	<Image src={manager} alt={'manager'} width={25} height={25} />
		        		        </span>
		        		        <span className={css.radioLabel}>Manager</span>
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
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className={css.button} type="submit">
                        <div className={css.svgWrapper}>
                            <Image src={cloud} alt={'cloud'} width={30} height={30} />
                        </div>
                        <span >Save</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAdminForm;
