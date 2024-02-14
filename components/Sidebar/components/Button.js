import React from 'react';
import css from "@/styles/sidebar/button.module.css";
import { arrow } from "@/components/Sidebar/assets/svg"
import Image from "next/image";

const Button = (props) => {

    const {ModalClose, setModalClose} = props;

    return (
        <button className={`${css.expand_btn} ${ModalClose ? css.rotate : ``}`} onClick={() => setModalClose(prev=> !prev)}>
           <Image src={arrow} alt={'arrow'} width={16} height={16} priority />
        </button>
    );
};

export default Button;