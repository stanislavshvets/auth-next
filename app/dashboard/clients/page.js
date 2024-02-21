import Form from "@/components/Clients/Form/Form";
import ClientsList from "@/components/Clients/ClientsList";
import css from "@/styles/DashboardPages/clients/clients.module.css";


const Clients = () => {

    return (
        <div className={css.main_div}>
            <Form />
            <ClientsList />
        </div>
    );
};

export default Clients;