import { NextResponse, NextRequest } from "next/server";

export async function POST(request){

    try {
        const body = await request.json()
        const { name, phone, email } = body

        console.log("Request----->" , body)

        if(!name || !phone || !email) return NextResponse.json({"message": "No DATA"})

        return NextResponse.json(body)
    }catch (error){
        return NextResponse.error()
    }


}