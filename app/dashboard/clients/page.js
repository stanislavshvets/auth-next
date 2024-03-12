import Form from "@/components/Clients/Form/Form";
import LoadingComp from "@/components/Loading/LoadingComp";
import { Suspense } from "react";
import ClientsList from "@/components/Clients/ClientsList";
import css from "@/styles/DashboardPages/clients/clients.module.css";


const Clients = async () => {

    return (
        <div className={css.main_div}>
            <Form />
            <Suspense fallback={<div className={css.loading}><LoadingComp/></div>}>
                <ClientsList />
            </Suspense>
        </div>
    );
};

export default Clients;
