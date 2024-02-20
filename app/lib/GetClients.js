import { NextResponse } from "next/server";
import axios from "axios";

export async function GetClients() {
    try{
        const data = await axios.get("/api/users")

        return NextResponse.json(data)
    }catch (error){
        console.log("error!!!", error)
    }
}
