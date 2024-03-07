import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/utils/prismadb";

export const GetClients = async () => {

    try {
        // const session = await getServerSession(options);
        //
        // if(!session) new Error('No session')

        return await prisma.user.findMany()

    } catch (error) {
        console.error('Database Error:', error);
    }
}
