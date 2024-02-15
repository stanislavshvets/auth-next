"use client"

import { useState } from "react";
import pages from "@/components/Sidebar/pages";
import Logo from "@/components/Sidebar/components/Logo";
import Customer from "@/components/Sidebar/components/Customer";
import Button from "@/components/Sidebar/components/Button";
import LinkList from "@/components/Sidebar/components/Links/LinkList";
import Search from "@/components/Sidebar/components/Search";
import css from '@/styles/sidebar.module.css'

const Sidebar = (props) => {

    const {img, mail, name} = props

    const [ModalClose, setModalClose] = useState(false)
    const [message, setMessage] = useState('');

    const filtered = pages.filter(page => {
        return page.name.toLowerCase().startsWith(message.toLowerCase())
    })

    console.log('message--->' ,message);

    console.log('filter---->' ,filtered);

    return (
        <aside className={`${css.aside} ${ModalClose ? css.collapsed : ``}`}>
            <nav className={css.sidebar}>
                <div className={css.sidebar_top_wrapper}>
                    {ModalClose ?
                        <Logo link={"/dashboard"} img={"./next-mini.svg"} width={30} height={30}/>
                        :
                        <Logo link={"/dashboard"} img={"./next.svg"} width={140} height={100}/>
                    }
                    <Button ModalClose={ModalClose} setModalClose={setModalClose}/>
                </div>
                <Search setModalClose={setModalClose} ModalClose={ModalClose} message={message} setMessage={setMessage}/>
                <LinkList setModalClose={setModalClose} pages={filtered}/>
               <Customer img={img} mail={mail} name={name}/>
            </nav>
        </aside>
    );
};

export default Sidebar;