import LoadingComp from "@/components/Loading/LoadingComp";
import { Suspense } from "react";
import { GetNews } from "@/app/lib/GetNews";
import ANews from "@/components/News/ANews";
import Pagination from "@/components/News/Pagination";
import css from '@/styles/DashboardPages/news/newsblock.module.css'

const NewsBlock = async ({searchParams}) => {

    const PAGE_SIZE = 5;

    const pageNumber = Number(searchParams?.page || 1);

    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take;

    const data = await GetNews(take,skip)

    return (

        <div className={css.mainblock}>
            <Suspense fallback={<div className={css.loading}><LoadingComp/></div>}>
                <div className={ !data || data.data === [] ? css.error_block : css.news_wrapper}>
                        {!data || data.data === [] ? <p className={css.no_data}>NO DATA</p> :
                            data.data.map((item) =>
                                <ANews key={item.id} title={item.title} body={item.body} date={item.date.toString()} />
                        )}
                </div>
            {!data || data.data === [] ? <></> : <Pagination totalPages={data.metadata.totalPages}
                                hashNextPage={data.metadata.hashNextPage}
                                searchParams={searchParams}/>}
            </Suspense>
            </div>
    );
};

export default NewsBlock;
