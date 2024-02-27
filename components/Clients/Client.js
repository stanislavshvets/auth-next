import css from '@/styles/DashboardPages/clients/client.module.css'
import DelButton from "@/components/Clients/DeleteClient/DelButton";
import UpdateButton from "@/components/Clients/UpdateClient/UpdateButton";
const Client = ({ id, name, phone, email, newuser }) => {

    return (
        <div className={css.card}>
            <p>{id}</p>
            {name && <p>{name}</p>}
            <p>{phone}</p>
            {email && <p>{email}</p>}
            {!newuser &&
            <div className={css.btns}>
                <UpdateButton id={id} name={name} phone={phone} email={email}/>
                <DelButton id={id} name={name} phone={phone}/>
            </div>}
        </div>
    );
};

export default Client;