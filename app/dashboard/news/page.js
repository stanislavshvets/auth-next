import css from "@/styles/DashboardPages/news/news.module.css";
import EditingForm from "@/components/News/EditingForm/EditingForm";
import NewsBlock from "@/components/News/NewsBlock";
import { GetNews } from "@/app/lib/GetNews";

const News = async () => {

    const data = await GetNews()

    return (
        <div className={css.main_div}>
            <EditingForm />
            <NewsBlock data={data}/>
        </div>
    );
};

export default News;
