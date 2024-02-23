import Form from "@/components/Clients/Form/Form";
import ClientsList from "@/components/Clients/ClientsList";
import css from "@/styles/DashboardPages/clients/clients.module.css";
import { GetClients } from "@/app/lib/GetClients";


const Clients = async () => {

    const data = await GetClients()

    return (
        <div className={css.main_div}>
            <Form />
            <ClientsList data={data}/>
        </div>
    );
};

export default Clients;