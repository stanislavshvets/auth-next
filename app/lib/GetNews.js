import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/utils/prismadb";

export const GetNews = async () => {

    try {
        // const session = await getServerSession(options);
        //
        // if(!session) new Error('No session')

        const news = await prisma.news.findMany()

        console.log('Data fetch completed after 3 seconds.');

        return news
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch revenue data.');
    }
}