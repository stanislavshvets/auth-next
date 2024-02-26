import { useEffect, useState } from 'react';
import css from '@/styles/DashboardPages/clients/confirmmodal.module.css'
import Client from "@/components/Clients/Client";

const ConfirmModal = ({Close, newClient}) => {

    const {id, name, phone, email } = newClient

    const [isSecondsLeft, isSetSecondsLeft] = useState(5);

    const closeForm = () => {
        Close(false)
    }

    useEffect(() => {
        if(isSecondsLeft <= 0) {
            closeForm()
            return
        }
        const timer = setInterval(() => {
            isSetSecondsLeft(isSecondsLeft - 1);
        }, 1000)

        return () => clearInterval(timer)
    }, [isSecondsLeft]);

    return (
        <div className={css.wrapper}>
            <h2 className={css.h2}>A new client has been created</h2>
            <div className={css.client_wrapper}>
                <Client id={id} name={name} phone={phone} email={email}/>
                <button className={css.button} onClick={closeForm}>Close</button>
            </div>
            <p className={css.count_txt}>The window will be closed in <span className={css.count}>{isSecondsLeft}</span>...</p>
        </div>
    );
};

export default ConfirmModal;