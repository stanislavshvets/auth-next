import React from 'react';
import css from "@/styles/sidebar/customer.module.css";
import Image from "next/image";
import Link from "next/link";

const Customer = (props) => {

    const {img, mail, name} = props

    return (
        <div className={css.sidebar__profile}>
            <div className={css.avatar__wrapper}>
                <Image className={css.avatar} src={img} alt={`${img} avatar`} width={100} height={100} priority />
            </div>
            <div className={`${css.avatar__name} ${css.hide}`}>
                <div className={css.user_name}>{name}</div>
                <div className={css.email}>{mail}</div>
            </div>
            <Link href={'/api/auth/signout?callbackUrl=/'} className={`${css.logout} ${css.hide}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24"
                     height="24"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round" aria-labelledby="logout-icon" role="img">
                    <title id="logout-icon">log out</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M9 12h12l-3 -3"></path>
                    <path d="M18 15l3 -3"></path>
                </svg>
            </Link>
        </div>
    );
};

export default Customer;