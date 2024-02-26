import css from "@/styles/DashboardPages/clients/errormodal.module.css";

const ErrorModal = ({closeModal, error}) => {

    console.log("ERROR---->",error.response);

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>{error.message}{error.status && <p className={css.p}>CODE: {error.status}</p>}</h2>
                <button className={css.btn} onClick={() => closeModal(false)}>CANCEL</button>
            </div>
        </>
    );
};

export default ErrorModal;