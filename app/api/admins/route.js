import prisma from "@/utils/prismadb";
import {NextResponse} from "next/server";
const bcrypt = require('bcrypt');

export async function POST(request){

    const salt = process.env.SECRET_SALT

    try {
        const body = await request.json()
        const { login, password, role } = body

        if(!login || !password) return NextResponse.json({ message: 'No login or password' }, { status: 404 });

        const existingAdmin = await prisma.admin.findMany({
            where: {
                OR: [
                    { login: login },
                ]
            },
            select: {
                id: true,
                login: true,
            }
        });

        if(existingAdmin.length > 0 && existingAdmin !== [] )
            return NextResponse.json({ message: 'User already exists' }, { status: 404 });

        const hashPassword = await bcrypt.hash(password, +salt)

        const admin = await prisma.admin.create({
            data: {
                login,
                password: hashPassword,
                role,
            }
        })

        return NextResponse.json({ data: admin }, { status: 201 })
    }catch (error){
        return NextResponse.error()
    }
}
