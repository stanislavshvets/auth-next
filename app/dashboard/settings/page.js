import css from "@/styles/DashboardPages/settings/settings.module.css";
import AddAdminForm from "@/components/Settings/AddAdminForm";
import AdminsBlock from "@/components/Settings/AdminsBlock";


const Settings = () => {
    return (
        <div className={css.main_div}>
            <AddAdminForm />
            <AdminsBlock />
        </div>
    );
};

export default Settings;
