"use client"

import css from "@/styles/DashboardPages/clients/clients.module.css";
import Form from "@/components/Users/Form";
import { GetClients } from "@/app/lib/GetClients";
import axios from "axios";
import {useEffect, useState} from "react";

const Clients = () => {

    const [users, setUsers] = useState()

    // const getData = async () => {
    //
    //     try{
    //       const clients =  await axios.get("/api/users")
    //           .then(function (response) {
    //               return response
    //           })
    //
    //     }catch (error){
    //         console.log("error!!!", error)
    //     }
    // }
useEffect(()=>{
    try {
        axios.get('/api/users')
            .then(({data}) =>{
                console.log("FETCHED DATA--->", data)
                setUsers(data)
            })
    } catch (error) {
        console.error("error----->",error);
    }
},[])

    console.log("DAAAATAAA---->", users)

    return (
        <div className={css.main_div}>
            <Form />
        </div>
    );
};

export default Clients;