import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import css from '@/styles/DashboardPages/dashboard_layout.module.css'

const DashboardLayout = async ({ children }) => {

    // const session = await getServerSession(options);
    //
    // if(!session) {
    //     redirect('/api/auth/signin?callbackUrl=/dashboard')
    // }
    //
    // const { user : {name, email, image} } = session;
    //
    // console.log('session header---->' , session);

    return (
        <main className={css.main}>
            <Sidebar name={"name"} mail={"email"} img={'/next-mini.svg'}/>
           { children }
        </main>
    );
};

export default DashboardLayout;