import css from '@/styles/DashboardPages/clients/deleteBTN/delmodal.module.css'

const DelModal = ({id, name, phone, closeModal, deleteClient}) => {

    return (
        <>
            <div className={css.background} onClick={() => closeModal(false)} ></div>
            <div className={css.modal} >
                <h2 className={css.h2}>Are you sure you want to delete the client?</h2>
                <div className={css.info}>
                    <p className={css.p}>ID: <span className={css.props}>{id}</span></p>
                    {name ? <p className={css.p}>NAME: <span className={css.props}>{name}</span></p> :
                        <p className={css.p}>PHONE: <span className={css.props}>{phone}</span></p>
                    }
                </div>
                <div className={css.btns}>
                    <button className={css.apply_btn} onClick={() => deleteClient(id.toString())}>DELETE<span></span></button>
                    <button className={css.cancel_btn} onClick={() => closeModal(false)}>CANCEL<span></span></button>
                </div>
            </div>
        </>
    );
};

export default DelModal;