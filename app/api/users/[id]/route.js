import {NextResponse} from "next/server";
import prisma from "@/utils/prismadb";

export async function POST(request){

    try {
        const userid  = +request.url.slice(request.url.lastIndexOf('/') + 1)

        if(!userid)
            return NextResponse.json({message: "No id"}, {status: 404})

        const body = await request.json()

        const { name, phone, email } = body

        const resultphone = await prisma.user.findUnique({
            where: {
                phone: phone,
            },
            select: {
                id: true
            }
        }).then(res => {
            if (res === null) {
                return false;
            } else {
                if (res.id === +userid) {
                    return false;
                } else {
                    return res.id;
                }
            }
        });

        if(resultphone)
            return NextResponse.json({"message": `User id: ${resultphone}, with this phone, already exists`}, {status: 403})

        const resultemail = await prisma.user.findFirst({
            where: {
                email: email,
            },
            select: {
                id: true
            }
        }).then(res => {
            if (res === null) {
                return false;
            } else {
                if (res.id === +userid) {
                    return false;
                } else {
                    return res.id;
                }
            }
        });

        if(resultemail)
            return NextResponse.json({"message": `User id: ${resultemail}, with this phone, already exists`}, {status: 403})

        if( phone === "" )
            return NextResponse.json({"message": "No phone"}, {status: 400})

        const user = await prisma.user.update({
            where: {
                id: +userid,
            },
            data: {
                name: name,
                phone: phone,
                email: email
            },
        })

        return NextResponse.json({ data: user }, { status: 201 })
    }catch (error){
        return NextResponse.error()
    }
}

export async function DELETE(request) {

    try {
        const id  = +request.url.slice(request.url.lastIndexOf('/') + 1)

        if(!id)
            return NextResponse.json({"message": "No id"}, {status: 404})

        const result = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })

        if(!result) return NextResponse.json({"message": "No User"}, {status: 404})

        const deleteUser = await prisma.user.delete({
            where: {
                id: id,
            },
        })

        return NextResponse.json(deleteUser, {status: 201})
    } catch (error) {
        return NextResponse.error()
    }
}