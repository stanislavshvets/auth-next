import { NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

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