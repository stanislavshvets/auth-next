import React from 'react';
import css from "@/styles/sidebar/logo.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = (props) => {

    const {link, img} = props

    return (
        <div className={css.sidebar_top}>
            <Link href={link} className={css.logo__wrapper}>
                <Image src={img} alt="Logo" className={css.logo_small} width={100} height={20}/>
            </Link>
        </div>
    );
};

export default Logo;