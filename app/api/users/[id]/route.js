import {NextResponse} from "next/server";
import prisma from "@/utils/prismadb";

export async function DELETE(request) {

    try {
        const id  = +request.url.slice(request.url.lastIndexOf('/') + 1)

        if(!id)
            return NextResponse.json({message: "No id"}, {status: 404})

        const result = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })

        if(!result) return NextResponse.json({message: "No User"}, {status: 404})

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