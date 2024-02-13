import pages from "@/components/Sidebar/pages";
import DashboardLink from "@/components/Sidebar/components/Links/DashboardLink";
import css from "@/styles/sidebar/linklist.module.css";

const LinkList = (props) => {

    const { setModalOpen } = props

    return (
        <div className={css.sidebar_links}>
            <ul>
                {pages.map((page) =>
                    <DashboardLink key={page.id} name={page.name} link={page.link} icon={page.icon} setModalOpen={setModalOpen} />)}
            </ul>
        </div>
    );
};

export default LinkList;