import {Suspense} from "react";
import LoadingComp from "@/components/Loading/LoadingComp";
import EditingForm from "@/components/News/EditingForm/EditingForm";
import NewsBlock from "@/components/News/NewsBlock";
import css from "@/styles/DashboardPages/news/news.module.css";

const News = async ({searchParams}) => {

    return (
        <div className={css.main_div}>
            <EditingForm />
            <Suspense fallback={<LoadingComp/>}>
                <NewsBlock searchParams={searchParams}/>
            </Suspense>
        </div>
    );
};

export default News;
