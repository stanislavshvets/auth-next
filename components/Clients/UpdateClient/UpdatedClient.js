import css from "@/styles/DashboardPages/clients/UpdateBTN/updatedClient.module.css";

const UpdatedClient = ({updated, closeModal}) => {

    const {name, phone, email} = updated;

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>The client has been updated</h2>
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

export default UpdatedClient;