import css from "@/styles/header.module.css"
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Header = async () => {

    const sessiom = await getServerSession(options);

    return (
        <header className={css.header}>
            <Image src={'./next.svg'} alt={'NextLogo'} width={150} height={37} priority/>

            {sessiom ? (
                <Link href={'/api/auth/signout?callbackUrl=/'} className={css.link}>LOGOUT</Link>
            ) : (
                <Link href={'/signin'} className={css.link}>LOGIN</Link>
            )}

            <Link href={'/dashboard'} className={css.link}>DASHBOARD</Link>
        </header>
    );
};

export default Header;
