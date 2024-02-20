
import css from "@/styles/DashboardPages/clients/clients.module.css";
import Form from "@/components/Users/Form";
import { GetClients } from "@/app/lib/GetClients";


const Clients = async () => {

    const clients = await GetClients();

    console.log("CLIENTS----->" ,clients);

    return (
        <div className={css.main_div}>
            <Form />
        </div>
    );
};

export default Clients;