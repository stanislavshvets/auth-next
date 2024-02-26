"use client"

import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import DelModal from "@/components/Clients/DelModal";
import DeletedClient from "@/components/Clients/DeletedClient";
import ErrorModal from "@/components/Clients/ErrorModal";
import { bin } from "@/components//Sidebar/assets/svg"
import css from '@/styles/DashboardPages/clients/delbutton.module.css'


const DelButton = ({id, name, phone}) => {

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
            setModalOpen(false)
            setErrorOpen(true)
        }
    }

    console.log('deletedUser---->',deletedClient);
    console.log("ERROR---->",error);

    return (
        <>
            {modalOpen && <DelModal id={id} name={name} phone={phone} closeModal={setModalOpen} deleteClient={Delete}/> }
            {modalConfirmOpen && <DeletedClient deleted={deletedClient} closeModal={setModalConfirmOpen}/> }
            {errorOpen && <ErrorModal closeModal={setErrorOpen} error={error} />}
            <button className={css.btn} onClick={() => setModalOpen(true)}>
                <Image src={bin} alt={'bin'} width={15} height={15} />
            </button>
        </>

    );
};

export default DelButton;