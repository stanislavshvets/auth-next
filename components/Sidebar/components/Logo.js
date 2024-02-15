import React from 'react';
import css from "@/styles/sidebar/logo.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = (props) => {

    const {link, img, width, height} = props

    return (
        <div className={css.logo_bar_top}>
            <Link href={link} className={css.logo_wrapper}>
                <Image src={img} alt="Logo" width={width} height={height}/>
            </Link>
        </div>
    );
};

export default Logo;