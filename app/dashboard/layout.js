import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {  redirect} from "next/navigation";
import DashHeader from "@/components/DashHeader";


const DashboardLayout = async ({ children }) => {

    const session = await getServerSession(options);

    if(!session) {
        redirect('/api/auth/singin?callbackUrl=/dashboard')
    }

    const { user : {name, email, image} } = session;


    console.log('session header---->' , session);





    return (
        <>
            <DashHeader name={name} mail={email} img={image}/>
           { children }
        </>
    );
};

export default DashboardLayout;