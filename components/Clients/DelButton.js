"use client"

import Image from "next/image";
import { bin } from "@/components//Sidebar/assets/svg"
import css from '@/styles/DashboardPages/clients/delbutton.module.css'
import {useState} from "react";
import DelModal from "@/components/Clients/DelModal";
import axios from "axios";
import DeletedClient from "@/components/Clients/DeletedClient";


const DelButton = ({id, name}) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalConfirmOpen, setModalConfirmOpen] = useState(false)
    const [deletedClient, setDeletedClient] = useState()
    const [error, setError] = useState()
    const [errorOpen, setErrorOpen] = useState(false)

    const Delete = async (id) => {
        try{
            await axios.delete(`/api/users/${id}`)
                .then((res) => {
                    setDeletedClient(res.data)
                    setModalOpen(false)
                    setModalConfirmOpen(true)
                    console.log("RESP---->",res)
            })
        }catch (error){
            setError(error)
            setErrorOpen(true)
        }
    }

    console.log('deletedUser---->',deletedClient);
    console.log("ERROR---->",error);

    return (
        <>
            {modalOpen && <DelModal id={id} name={name} closeModal={setModalOpen} deleteClient={Delete}/> }
            {modalConfirmOpen && <DeletedClient deleted={deletedClient} closeModal={setModalConfirmOpen}/> }
            <button className={css.btn} onClick={() => setModalOpen(true)}>
                <Image src={bin} alt={'bin'} width={15} height={15} />
            </button>
        </>

    );
};

export default DelButton;