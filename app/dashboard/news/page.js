import css from "@/styles/DashboardPages/news/news.module.css";
import EditingForm from "@/components/News/EditingForm/EditingForm";
import NewsBlock from "@/components/News/NewsBlock";
import { GetNews } from "@/app/lib/GetNews";

const News = async ({searchParams}) => {

    const PAGE_SIZE = 5;

    const pageNumber = Number(searchParams?.page || 1); // Get the page number. Default to 1 if not provided.

    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take;

    const data = await GetNews(take,skip)

    console.log("DATA IN PAGE---->", data);

    return (
        <div className={css.main_div}>
            <EditingForm />
            <NewsBlock data={data} searchParams={searchParams}/>
        </div>
    );
};

export default News;
