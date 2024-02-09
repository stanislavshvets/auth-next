import css from '@/styles/dashHeader.module.css'
import Image from "next/image";
import Link from "next/link";
const DashHeader = (props) => {

    const {img, mail, name} = props

    return (
        <header className={css.header}>
            <Link href={'/api/auth/signout?callbackUrl=/'} className={css.link}>LOGOUT</Link>
            <div className={css.info}>
                <Image src={img} alt={`customer img name`} width={100} height={100} priority />
                <div className={css.txt_block}>
                    <h3>{name}</h3>
                    <p>{mail}</p>
                </div>
            </div>
        </header>
    );
};

export default DashHeader;