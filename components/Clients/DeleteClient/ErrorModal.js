import css from "@/styles/DashboardPages/clients/deleteBTN/errormodal.module.css";

const ErrorModal = ({closeModal, error}) => {

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>{error.message}{error.status && <p className={css.p}>CODE: {error.status}</p>}</h2>
                <div className={css.btns}>
                    <button className={css.btn} onClick={() => closeModal(false)}>CANCEL<span></span></button>
                </div>
            </div>
        </>
    );
};

export default ErrorModal;