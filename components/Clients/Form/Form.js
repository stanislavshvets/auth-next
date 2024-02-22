"use client"

import {useForm} from "react-hook-form";
import axios from "axios";
import css from '@/styles/DashboardPages/clients/form.module.css'
import {useState} from "react";
import ConfirmModal from "@/components/Clients/Form/ConfirmModal";

const Form = () => {

    const [newClient, setNewClient] = useState()
    const [modalOpen, setModalOpen] = useState(false)

    const { register,
        handleSubmit,
        reset,
        formState: { errors }} = useForm()

    const onSubmit = async (data) => {

        const {name, phone, email } = data

        try{
            await axios.post("/api/users", {
                name,
                phone,
                email
            }).then((res) => {
                (res.status === 200) ? setModalOpen(true) : null
                console.log("response---->", res.status)
                setNewClient(res.data)
            })
            reset()
        }catch (error){
            console.log("error!!!", error)
        }
    }

    console.log("newClient---->" ,newClient)
    console.log("modalOpen----->",modalOpen)

    return (
        <section className={css.main}>
            <h1 className={css.h1}>ADD NEW CLIENT</h1>
            {modalOpen ? <ConfirmModal newClient={newClient} Close={setModalOpen}/> :

                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                     <input className={css.input} placeholder={"Name"} {...register("name", { required: true })} />

                     <input className={css.input} placeholder={"Phone"} {...register("phone", { required: true })} />

                     <input className={css.input} placeholder={"Email"} {...register("email")} />

                     {errors.exampleRequired && <span>This field is required</span>}

                <button className={css.button} type="submit">ADD</button>
            </form>}
        </section>
    );
};

export default Form;