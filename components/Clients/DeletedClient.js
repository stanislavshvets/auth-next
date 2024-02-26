import css from "@/styles/DashboardPages/clients/deletedClient.module.css";

const DeletedClient = ({deleted, closeModal}) => {

    const {name, phone, email} = deleted;

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>The client has been deleted</h2>
                <div className={css.info}>
                    <p>NAME: {name}</p>
                    <p>PHONE: {phone}</p>
                    <p>EMAIL: {email}</p>
                </div>
                <button className={css.btn} onClick={() => closeModal(false)}>CANCEL</button>
            </div>
        </>
    );
};

export default DeletedClient;