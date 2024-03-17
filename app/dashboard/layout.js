import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Sidebar from "@/components/Sidebar/Sidebar";
import css from '@/styles/DashboardPages/dashboard_layout.module.css'

const DashboardLayout = async ({ children }) => {

    const session = await getServerSession(options);

    const { user: {name, email, image, role} } = session

    return (
        <main className={css.main}>
            <Sidebar name={name} mail={email} img={image ? image : '/next-mini.svg'} role={role}/>
           { children }
        </main>
    );
};

export default DashboardLayout;
