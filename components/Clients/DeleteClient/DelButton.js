"use client"

import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import DelModal from "@/components/Clients/DeleteClient/DelModal";
import DeletedClient from "@/components/Clients/DeleteClient/DeletedClient";
import ErrorModal from "@/components/Clients/DeleteClient/ErrorModal";
import { bin } from "@/components/assets/svg"
import css from '@/styles/DashboardPages/clients/deleteBTN/delbutton.module.css'


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
            })
        }catch (error){
            setError(error)
            setModalOpen(false)
            setErrorOpen(true)
        }
    }

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