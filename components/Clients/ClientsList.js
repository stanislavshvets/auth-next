import { GetClients } from "@/app/lib/GetClients";
import css from "@/styles/DashboardPages/clients/clientslist.module.css"
import Client from "@/components/Clients/Client";

const ClientsList = async () => {

    const data = await GetClients()

    return (
        <>
        <div className={css.h2_wrapper}>
            <h2 className={css.h2}>CLIENTS LIST</h2>
        </div>
        <section className={css.main}>
            <div className={css.clients_div}>
                <div className={css.div_head}>
                    <p>ID</p>
                    <p>NAME</p>
                    <p>PHONE</p>
                    <p>EMAIL</p>
                </div>
                <div className={css.clients_list}>
                    {data.map((client) =>
                        <Client key={client.id} id={client.id} name={client.name} phone={client.phone} email={client.email} />)}
                </div>
            </div>
        </section>
        </>
    );
};

export default ClientsList;