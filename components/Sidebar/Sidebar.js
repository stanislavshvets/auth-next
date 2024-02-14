"use client"

import css from '@/styles/sidebar.module.css'
import { useState } from "react";
import pages from "@/components/Sidebar/pages";
import Logo from "@/components/Sidebar/components/Logo";
import Customer from "@/components/Sidebar/components/Customer";
import Button from "@/components/Sidebar/components/Button";
import LinkList from "@/components/Sidebar/components/Links/LinkList";
import Search from "@/components/Sidebar/components/Search";

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
                    <Logo link={"/dashboard"} img={"./next.svg"}/>
                    {/*todo add mini logo*/}
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