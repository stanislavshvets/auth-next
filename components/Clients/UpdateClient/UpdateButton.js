"use client"

import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import { edit } from "@/components/assets/svg"
import css from "@/styles/DashboardPages/clients/UpdateBTN/upbutton.module.css";
import UpdateModal from "@/components/Clients/UpdateClient/UpdateModal";
const UpdateButton = ({id, name, phone, email}) => {

    const [modalOpen, setModalOpen] = useState(false)

    // const Update = async (id) => {
    //     try{
    //         await axios.delete(`/api/users/${id}`)
    //             .then((res) => {
    //                 setDeletedClient(res.data)
    //                 setModalOpen(false)
    //                 setModalConfirmOpen(true)
    //             })
    //     }catch (error){
    //         setError(error)
    //         setModalOpen(false)
    //         setErrorOpen(true)
    //     }
    // }

    return (
        <>
            {modalOpen && <UpdateModal id={id} name={name} phone={phone} email={email} closeModal={setModalOpen} /> }
            <button className={css.btn} onClick={() => setModalOpen(true)}>
                <Image src={edit} alt={'edit'} width={20} height={20} />
            </button>
        </>
    );
};

export default UpdateButton;