import { GetClients } from "@/app/lib/GetClients";
import css from "@/styles/DashboardPages/clients/clientslist.module.css"

const ClientsList = async () => {

    const data = await GetClients()

    console.log("DATA CLIENTS---->",data);

    return (
        <section className={css.main}>
            <h1 className={css.h1}>CLIENTS LIST</h1>
            <div> className={css.clients_div}>

            </div>
        </section>
    );
};

export default ClientsList;