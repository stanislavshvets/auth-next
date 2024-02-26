import css from "@/styles/DashboardPages/clients/error.module.css";

const ErrorModal = ({Close, error}) => {

    return (
        <div className={css.wrapper}>
            <h2 className={css.h2}>ERROR</h2>
            <div className={css.client_wrapper}>
                <p className={css.p}>
                    CODE: <span className={css.error}>{error.response.status.toString()}</span> MESSAGE: {
                    (error.response.status >= 401 && error.response.status !== 403) ?
                    <span className={css.error}>BAD REQUEST. Contact your developer</span> :
                        (error.response.status === 400) ?
                            <span className={css.error}>invalid data</span> :
                        (error.response.status === 403) ?
                            <span className={css.error}>User already exists</span> :
                    (error.response.status >= 500) ?
                    <span className={css.error}>SOMETHING WRONG WITH SERVER. Contact your developer</span> :
                        <span className={css.error}>Unknown error. Contact your developer</span>
                }
                </p>
                <button className={css.button} onClick={() => Close(false)}>Close</button>
            </div>
        </div>
    );
};

export default ErrorModal;