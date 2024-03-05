import css from '@/styles/DashboardPages/news/newsblock.module.css'
import ANews from "@/components/News/ANews";

const NewsBlock = async ({data}) => {

    console.log("FROM NEWSBLOCK---->",data);

    return (
        <div className={css.mainblock}>
            
                {data.map((item) =>
                    <ANews key={item.id} title={item.title} body={item.body} date={item.date.toString()} /> )}

        </div>
    );
};

export default NewsBlock;