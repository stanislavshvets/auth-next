import DashboardLink from "@/components/Sidebar/components/Links/DashboardLink";
import css from "@/styles/sidebar/linklist.module.css";
import {usePathname} from "next/navigation";

const LinkList = (props) => {

    const { setModalClose, ModalClose, pages } = props

    const pathname = usePathname()

    return (
        <div className={css.sidebar_links}>
            <ul className={css.ul}>
                {pages.map((page) =>
                    <DashboardLink key={page.id} name={page.name} link={page.link} icon={page.icon} setModalClose={setModalClose} ModalClose={ModalClose} active={(pathname === page.link)}/>)}
            </ul>
        </div>
    );
};

export default LinkList;

// active={(pathname === page.link) ? true : false}