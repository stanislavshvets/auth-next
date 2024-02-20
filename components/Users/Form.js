"use client"

import {useForm} from "react-hook-form";
import axios from "axios";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <label> Name
                <input  {...register("name")} />
            </label>
            <label> Phone
                <input {...register("phone", { required: true })} />
            </label>
            <label> Email
                <input {...register("email", { required: true })} />
            </label>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Form;