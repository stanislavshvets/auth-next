import css from '@/styles/DashboardPages/clients/delmodal.module.css'

const DelModal = ({id, name, closeModal, deleteClient}) => {

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>Are you sure you want to delete the client?</h2>
                <div className={css.info}>
                    <p>ID: {id}</p>
                    <p>NAME: {name}</p>
                </div>
                <div className={css.btns}>
                    <button onClick={() => deleteClient(id.toString())}>DELETE</button>
                    <button onClick={() => closeModal(false)}>CANCEL</button>
                </div>
            </div>
        </>
    );
};

export default DelModal;