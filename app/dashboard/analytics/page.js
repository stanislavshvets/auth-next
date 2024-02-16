"use client"

import css from "@/styles/DashboardPages/users/users.module.css";
import {useForm} from "react-hook-form";

const Users = () => {


        const { register, handleSubmit, watch, formState: { errors },} = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className={css.main_div}>
            <h1>Users</h1>
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
        </div>
    );
};

export default Users;