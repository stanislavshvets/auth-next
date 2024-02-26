import css from '@/styles/DashboardPages/clients/client.module.css'
import DelButton from "@/components/Clients/DelButton";
const Client = ({ id, name, phone, email }) => {

    return (
        <div className={css.card}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <DelButton id={id} name={name}/>
        </div>
    );
};

export default Client;