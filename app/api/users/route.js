import { NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
import {getServerSession} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";



export async function GET(){
    try{
        // const session = await getServerSession(options);

        // if(!session) return NextResponse.json({"message": "No session"})

        const users = await prisma.user.findMany()

        console.log("USERS----->", users)

        return NextResponse.json(users)
    }catch (error){
        return NextResponse.error()
    }
}

export async function POST(request){

    try {
        const body = await request.json()
        const { name, phone, email } = body

        console.log("Request----->" , body)

        if( !phone ) return NextResponse.json({"message": "No phone"})

        const user = await prisma.user.create({
            data: {
                name,
                phone,
                email,
            }
        })

        return NextResponse.json(user)
    }catch (error){
        return NextResponse.error()
    }


}