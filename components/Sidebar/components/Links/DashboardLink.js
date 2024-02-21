import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import css from "@/styles/sidebar/link.module.css";

const DashboardLink = (props) => {

    const {name, link, icon, setModalClose, ModalClose} = props

    const pathname = usePathname()

    console.log("pathname---->", pathname);
    console.log("link---->", link);

    return (
        <li className={css.li}>
                                                     {/*Через то шо відбувається ререндер не працює pathname === {link}*/}
            <Link href={link} title={name} className={`${ModalClose ? css.tooltip : ''} ${pathname === {link} ? `${css.active}` : ``}`} onClick={()=> setModalClose(true)}>
                <Image src={icon} alt={`${name} icon`} width={29} height={29} priority/>
                <span className={ModalClose ? css.hide : css.link}>{name}</span>
                <span className={css.tooltip_content}>{name}</span>
            </Link>
        </li>
    );
};

export default DashboardLink;