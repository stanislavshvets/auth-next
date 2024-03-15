"use client"

import { signIn } from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";


import css from '@/styles/signin.module.css'
import { g } from '@/components/assets/svg'
import Image from "next/image";
import {useForm} from "react-hook-form";
import axios from "axios";

const Page = () => {

    const { register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }} = useForm()

    const router = useRouter()
    const serchParams = useSearchParams();
    const callbackUrl = serchParams.get('callbackUrl') || '/dashboard';


    const onSubmit = async (data) => {

        const { login, password } = data

        const res = await signIn("credentials", {
            login: login,
            password: password,
            redirect: false,
        })

        if(res && !res.error) {
            router.push('/dashboard')
            console.log("RESPONSE FROM if SIGNIN---->" ,res)
        }else {
            console.log("RESPONSE FROM if error---->" ,res)
        }
    }

    return (
        <main className={css.main}>
            <section className={css.section}>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <div className={css.signin}>
                    <div className={css.content}>
                        <h2>Sign In</h2>
                        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={css.inputBox}>
                                <input type="text" {...register("login", { required: true })}/>
                                    <i>Username</i>
                            </div>
                            <div className={css.inputBox}>
                                <input type="password" {...register("password", { required: true })}/>
                                    <i>Password</i>
                            </div>
                            <div className={css.inputBox}>
                                <input className={css.btn} type="submit" value="Login"/>
                            </div>
                        </form>
                        <button className={css.gbtn} onClick={() =>signIn('google', {callbackUrl} )}>SIGN IN WITH GOOGLE<Image src={g} alt={"google icon"} width={25} height={25} /> </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
