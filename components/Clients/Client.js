import css from '@/styles/DashboardPages/clients/client.module.css'
const Client = ({ id, name, phone, email }) => {

    return (
        <div className={css.card}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default Client;