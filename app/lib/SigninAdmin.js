import prisma from "@/utils/prismadb";
export const SigninAdmin = async ( login ) => {

    if(!login) return {message: 'No login or password' };

    try {

        const admin = await prisma.admin.findUnique({
            where: {
                login
            },
            select: {
                id: true,
                login: true,
                password: true,
                role: true
            }
        },)

        console.log("DATA---->", admin)

        return { data: admin }

    } catch (error) {
        console.error('Database Error:', error);
    }
}
