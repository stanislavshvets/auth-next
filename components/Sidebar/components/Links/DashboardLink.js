import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import css from "@/styles/sidebar/linklist.module.css";

const DashboardLink = (props) => {

    const {name, link, icon, setModalOpen} = props

    const pathname = usePathname()

    return (
        <li>
            <Link href={link} title={name} className={`${css.tooltip} ${pathname === {link} ? `${css.active}` : ``}`} onClick={()=> setModalOpen(true)}>
                <Image src={icon} alt={`${name} icon`} width={29} height={29} priority/>
                <span className={`${css.link} ${css.hide}`}>{name}</span>
                <span className={css.tooltip__content}>{name}</span>
            </Link>
        </li>
    );
};

export default DashboardLink;