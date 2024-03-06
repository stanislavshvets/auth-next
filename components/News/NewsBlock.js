import css from '@/styles/DashboardPages/news/newsblock.module.css'
import ANews from "@/components/News/ANews";
import Pagination from "@/components/News/Pagination";


const NewsBlock = async ({data, searchParams}) => {

    console.log("FROM NEWSBLOCK---->",data);

    return (
        <div className={css.mainblock}>

                {data.data.map((item) =>
                    <ANews key={item.id} title={item.title} body={item.body} date={item.date.toString()} /> )}
                <Pagination totalPages={data.metadata.totalPages}
                            hashNextPage={data.metadata.hashNextPage}
                            searchParams={searchParams}/>
        </div>
    );
};

export default NewsBlock;
