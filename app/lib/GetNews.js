import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/utils/prismadb";
import { revalidatePath } from "next/cache";

export const GetNews = async ( take, skip ) => {

    try {
        // const session = await getServerSession(options);
        //
        // if(!session) new Error('No session')


        // const [news, totalNews] = await prisma.$transaction([
        //     prisma.news.findMany({
        //         skip: 0,
        //         take: 4,
        //         orderBy: {
        //             id: 'desc',
        //         },
        //     },),
        //     prisma.news.count(),
        // ])
        //
        //
        // console.log("NEWS---->",news)
        // console.log("totalNews---->",totalNews)


        const news = await prisma.news.findMany({
                take,
                skip,
                orderBy: {
                    id: 'desc',
                },
            },)

        const totalNews = await prisma.news.count()

        revalidatePath('/dashboard/news/')

        return {
            data: news,
            metadata : {
                hashNextPage: skip + take < totalNews,
                totalPages: Math.ceil(totalNews / take)
            }
        }

    } catch (error) {
        console.error('Database Error:', error);
    }
}
