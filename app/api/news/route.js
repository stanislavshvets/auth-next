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
        const data = await request.json()

        const { title, body } = data

        if( title === "" || body === "") return NextResponse.json({message: "No data"}, {status: 400})

        const user = await prisma.news.create({
            data: {
                title,
                body
            }
        })

        return NextResponse.json({ data: user }, { status: 201 })
    }catch (error){
        return NextResponse.error()
    }
}