import css from "@/styles/DashboardPages/news/news.module.css";
import EditingForm from "@/components/News/EditingForm";
import NewsBlock from "@/components/News/NewsBlock";

const News = () => {
    return (
        <div className={css.main_div}>
            <EditingForm />
            <NewsBlock />
        </div>
    );
};

export default News;