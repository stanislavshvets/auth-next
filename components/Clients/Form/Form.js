"use client"

import {useForm} from "react-hook-form";
import axios from "axios";
import css from '@/styles/DashboardPages/clients/form.module.css'

const Form = () => {

    const { register,
        handleSubmit,
        reset,
        formState: { errors },} = useForm()

    const onSubmit = async (data) => {

        const {name, phone, email } = data

        try{
            await axios.post("/api/users", {
                name,
                phone,
                email
            }).then((res) => {
                console.log("response---->", res)
            })
            reset()
        }catch (error){
            console.log("error!!!", error)
        }
    }

    return (
        <section className={css.main}>
            <h1 className={css.h1}>ADD NEW CLIENT</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                     <input className={css.input} placeholder={"Name"} {...register("name", { required: true })} />

                     <input className={css.input} placeholder={"Phone"} {...register("phone", { required: true })} />

                     <input className={css.input} placeholder={"Email"} {...register("email")} />

                     {errors.exampleRequired && <span>This field is required</span>}

                <button className={css.button} type="submit">ADD</button>
            </form>
        </section>
    );
};

export default Form;