"use client"

import {useForm} from "react-hook-form";
import axios from "axios";
import css from '@/styles/DashboardPages/clients/form.module.css'
import {useState} from "react";
import ConfirmModal from "@/components/Clients/Form/ConfirmModal";
import ErrorModal from "@/components/Clients/Form/ErrorModal";

const Form = () => {

    const [newClient, setNewClient] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [error, setError] = useState()
    const [errorOpen, setErrorOpen] = useState(false)


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
                (res.status === 201) ? setModalOpen(true) : null
                console.log("RESPONSE---->" ,res)
                setNewClient(res.data.data)
            })
            reset()
        }catch (error){
            setErrorOpen(true)
            setError(error)
        }
    }

    console.log("newClient---->" ,newClient);

    return (
        <section className={css.main}>
            <h1 className={css.h1}>ADD NEW CLIENT</h1>
            {modalOpen ? <ConfirmModal newClient={newClient} Close={setModalOpen}/> :

                errorOpen ? <ErrorModal error={error} Close={setErrorOpen} /> :

                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

                     <input className={css.input} placeholder={"Name"} {...register("name", { required: true })} />

                     <input className={css.input} placeholder={"Phone"} {...register("phone")} />

                     <input className={css.input} placeholder={"Email"} {...register("email")} />

                     {errors.exampleRequired && <span>This field is required</span>}

                <button className={css.button} type="submit">ADD</button>
            </form>}
        </section>
    );
};

export default Form;