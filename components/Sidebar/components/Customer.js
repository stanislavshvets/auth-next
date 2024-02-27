import Link from "next/link";
import Image from "next/image";
import { logout } from "@/components/assets/svg"
import css from "@/styles/sidebar/customer.module.css";

const Customer = (props) => {

    const {img, mail, name, ModalClose} = props

    return (
        <div className={css.sidebar_profile}>
            <div className={css.avatar_wrapper}>
                <Image className={css.avatar} src={img} alt={`${img} avatar`} width={100} height={100} priority />
            </div>
            <div className={ModalClose ? css.hide : css.avatar_name}>
                <div className={css.user_name}>{name}</div>
                <div className={css.email}>{mail}</div>
            </div>
            <Link href={'/api/auth/signout?callbackUrl=/'} className={ModalClose ? css.hide : css.logout}>
                <Image src={logout} alt={'logout icon'} width={24} height={24}/>
            </Link>
        </div>
    );
};

export default Customer;