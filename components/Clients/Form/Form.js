"use client"

import {useForm} from "react-hook-form";
import axios from "axios";
import css from '@/styles/DashboardPages/clients/form.module.css'

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors },} = useForm()

    const onSubmit = async (data) => {

        const {name, phone, email } = data

        try{
            await axios.post("/api/users", {
                name,
                phone,
                email
            })
        }catch (error){
            console.log("error!!!", error)
        }
    }

    return (
        <div className={css.main}>
            <h1>Add new Client</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                <input className={css.input} placeholder={"Name"} {...register("name")} />

                <input className={css.input} placeholder={"Phone"} {...register("phone" )} />

                <input className={css.input} placeholder={"Email"} {...register("email", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <button className={css.button} type="submit">ADD</button>
            </form>
        </div>
    );
};

export default Form;