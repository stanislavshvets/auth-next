"use client"

import { useState } from "react";
import pages from "@/components/Sidebar/pages";
import Logo from "@/components/Sidebar/components/Logo";
import Customer from "@/components/Sidebar/components/Customer";
import Button from "@/components/Sidebar/components/Button";
import LinkList from "@/components/Sidebar/components/Links/LinkList";
import Search from "@/components/Sidebar/components/Search";
import { next_logo, next_logo_mini } from "@/components/assets/svg"
import css from '@/styles/sidebar/sidebar.module.css'

const Sidebar = (props) => {

    const {img, mail, name} = props

    const [ModalClose, setModalClose] = useState(true)
    const [message, setMessage] = useState('');

    const filtered = pages.filter(page => {
        return page.name.toLowerCase().startsWith(message.toLowerCase())
    })

    return (
        <aside className={`${css.aside} ${ModalClose ? css.close : css.open}`}>
            <nav className={css.sidebar}>
                <div className={css.sidebar_top_wrapper}>
                    {ModalClose ?
                        <Logo link={"/dashboard"} img={next_logo_mini} width={30} height={30}/>
                        :
                        <Logo link={"/dashboard"} img={next_logo} width={140} height={100}/>
                    }
                    <Button ModalClose={ModalClose} setModalClose={setModalClose}/>
                </div>
                <Search setModalClose={setModalClose} ModalClose={ModalClose} message={message} setMessage={setMessage}/>
                <LinkList setModalClose={setModalClose} pages={filtered} ModalClose={ModalClose}/>
                <Customer img={img} mail={mail} name={name} ModalClose={ModalClose}/>
            </nav>
        </aside>
    );
};

export default Sidebar;