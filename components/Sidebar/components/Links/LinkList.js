import DashboardLink from "@/components/Sidebar/components/Links/DashboardLink";
import css from "@/styles/sidebar/linklist.module.css";

const LinkList = (props) => {

    const { setModalClose, pages } = props

    return (
        <div className={css.sidebar_links}>
            <ul>
                {pages.map((page) =>
                    <DashboardLink key={page.id} name={page.name} link={page.link} icon={page.icon} setModalClose={setModalClose} />)}
            </ul>
        </div>
    );
};

export default LinkList;