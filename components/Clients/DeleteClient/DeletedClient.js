import css from "@/styles/DashboardPages/clients/deleteBTN/deletedClient.module.css";

const DeletedClient = ({deleted, closeModal}) => {

    const {name, phone, email} = deleted;

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>The client has been deleted</h2>
                <div className={css.info}>
                    {name && <p className={css.p}>NAME: <span className={css.props}>{name}</span></p>}
                    <p className={css.p}>PHONE: <span className={css.props}>{phone}</span></p>
                    {email && <p className={css.p}>EMAIL: <span className={css.props}>{email}</span></p>}
                </div>
                <div className={css.btns}>
                    <button className={css.btn} onClick={() => closeModal(false)}>CLOSE<span></span></button>
                </div>
            </div>
        </>
    );
};

export default DeletedClient;