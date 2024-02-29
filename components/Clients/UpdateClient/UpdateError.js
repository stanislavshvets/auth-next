import css from "@/styles/DashboardPages/clients/UpdateBTN/uperror.module.css";

const ErrorModal = ({closeModal, error}) => {

    const { data } = error.response

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>{data.message}{data.status && <p className={css.p}>CODE: {data.status}</p>}</h2>
                <div className={css.btns}>
                    <button className={css.btn} onClick={() => closeModal(false)}>CANCEL<span></span></button>
                </div>
            </div>
        </>
    );
};

export default ErrorModal;