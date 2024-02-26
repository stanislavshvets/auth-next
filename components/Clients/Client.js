import css from '@/styles/DashboardPages/clients/client.module.css'
import DelButton from "@/components/Clients/DelButton";
const Client = ({ id, name, phone, email }) => {

    return (
        <div className={css.card}>
            <p>{id}</p>
            {name && <p>{name}</p>}
            <p>{phone}</p>
            {email && <p>{email}</p>}
            <DelButton id={id} name={name} phone={phone}/>
        </div>
    );
};

export default Client;