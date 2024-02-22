import css from '@/styles/DashboardPages/clients/client.module.css'
const Client = (props) => {

    const { id, name, phone, email } = props

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