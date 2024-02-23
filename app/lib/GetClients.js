import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/utils/prismadb";

export const GetClients = async () => {

    try {
        // const session = await getServerSession(options);
        //
        // if(!session) new Error('No session')

        const users = await prisma.user.findMany()

        console.log('Data fetch completed after 3 seconds.');

        return users
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch revenue data.');
    }
}
