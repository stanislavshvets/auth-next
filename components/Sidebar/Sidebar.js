"use client"

import css from '@/styles/sidebar.module.css'
import { useState } from "react";
import Logo from "@/components/Sidebar/components/Logo";
import Customer from "@/components/Sidebar/components/Customer";
import Button from "@/components/Sidebar/components/Button";
import LinkList from "@/components/Sidebar/components/Links/LinkList";
import Image from "next/image";
import { magnifier } from '@/components/Sidebar/assets/svg'

const Sidebar = (props) => {

    const {img, mail, name} = props

    const [ModalOpen, setModalOpen] = useState(false)

    return (
        <aside className={`${css.aside} ${ModalOpen ? css.collapsed : ``}`}>
            <nav className={css.sidebar}>
                <div className={css.sidebar_top_wrapper}>
                    <Logo link={"/dashboard"} img={"./next.svg"}/>
                    <Button ModalOpen={ModalOpen} setModalOpen={setModalOpen}/>
                </div>
                <div className={css.search__wrapper}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="search-icon" role="img">
                        <title id="search-icon">Search</title>
                        <path
                            d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {/*<Image src={magnifier} alt={'magnifier icon'} width={24} height={24}/>*/}
                    <input type="text" aria-labelledby="search-icon"/>
                </div>
                <LinkList setModalOpen={setModalOpen} />
               <Customer img={img} mail={mail} name={name}/>
            </nav>
        </aside>
    );
};

export default Sidebar;