import { NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
// import {getServerSession} from "next-auth";
// import {options} from "@/app/api/auth/[...nextauth]/options";

// export async function GET(request){
//
//     const { searchParams } = new URL(request.url)
//
//     const query = searchParams.get('q')
//
//     try{
//         const session = await getServerSession(options);
//
//         if(!session) return NextResponse.json({"message": "No session"})
//
//         const users = await prisma.user.findMany()
//
//         console.log("USERS----->", users)
//
//         return NextResponse.json(users)
//     }catch (error){
//         return NextResponse.error()
//     }
// }

export async function POST(request){

    try {
        const body = await request.json()
        const { name, phone, email } = body

        const result = await prisma.user.findUnique({
            where: {
                phone: phone,
                email: email,
            },
        })

        if(result) return NextResponse.json({message: "User already exists"}, {status: 403})

        console.log("RESULT----->", result )

        console.log("Request----->" , body)

        if( phone === "" || email === "" ) return NextResponse.json({"message": "No phone"}, {status: 400})

        const user = await prisma.user.create({
            data: {
                name,
                phone,
                email,
            }
        })

        return NextResponse.json({ data: user }, { status: 201 })
    }catch (error){
        return NextResponse.error()
    }
}