"use client"

import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import { edit } from "@/components/assets/svg"
import css from "@/styles/DashboardPages/clients/UpdateBTN/upbutton.module.css";
import UpdateModal from "@/components/Clients/UpdateClient/UpdateModal";
import UpdatedClient from "@/components/Clients/UpdateClient/UpdatedClient";
const UpdateButton = ({id, name, phone, email}) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalConfirmOpen, setModalConfirmOpen] = useState(false)
    const [updatedClient, setUpdatedClient] = useState()

    const Update = async (data) => {

        const {name, phone, email, id } = data

        try{
            await axios.post(`/api/users/${id}`, {
                name,
                phone,
                email
            })
                .then((res) => {
                    setUpdatedClient(res.data.data)
                    setModalOpen(false)
                    setModalConfirmOpen(true)
                    console.log("RespOnse---->", res)
                })
        }catch (error){
            console.log('ERROR--->',error);
        }
    }

    return (
        <>

            {modalOpen && <UpdateModal id={id} name={name} phone={phone} email={email} closeModal={setModalOpen} updateClient={Update}/> }
            {modalConfirmOpen && <UpdatedClient updated={updatedClient} closeModal={setModalConfirmOpen} />}
            <button className={css.btn} onClick={() => setModalOpen(true)}>
                <Image src={edit} alt={'edit'} width={20} height={20} />
            </button>
        </>
    );
};

export default UpdateButton;