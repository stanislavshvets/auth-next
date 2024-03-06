import Link from "next/link";
import css from '@/styles/DashboardPages/news/pagination.module.css'
import { useSearchParams } from 'next/navigation';

const Pagination = ({ totalPages , hashNextPage, params, searchParams}) => {

    console.log('searchParams--->', searchParams, 'searchParams type---->', typeof searchParams)
    console.log('params--->', params, 'params type---->', typeof params)
    console.log('totalPages---->',totalPages);

    // const searchParams = useSearchParams();
    // searchParams.delete("page");
    // searchParams.set("page", "1");

    const firstPage = 1

    const pageNumber = Number(searchParams?.page || 1)


        // const currentPage = Math.min(Math.max(Number(hashNextPage), 1), totalPages);

    // console.log("currentPage---->", currentPage)

    // const getPagesToShow = () => {
    //     let startPage = currentPage - 2;
    //     let endPage = currentPage + 2;
    //
    //     if (currentPage <= 3) {
    //         startPage = 1;
    //         endPage = 5;
    //     } else if (currentPage >= totalPages - 2) {
    //         startPage = totalPages - 4;
    //         endPage = totalPages;
    //     }
    //
    //     return Array.from(
    //         { length: endPage - startPage + 1 },
    //         (_, i) => startPage + i,
    //     );
    // };
    //
    // const pages = getPagesToShow();




    return (
        <div className={css.main}>
            <Link
                className={(+searchParams?.page ||  1) ? css.btn_inactive : css.btn_active}
                href={`?page=${(!searchParams.page ? 1 : 2)}`}>
                Previous
            </Link>

            <nav className={css.nav_bar}>
                {Array.from({length: totalPages}).map((p, index) => (
                    <Link
                        className={`${css.nav_active_btn} 
                        ${p === searchParams
                            ? css.nav_inactive_btn
                            : ''}`}
                        key={index+1} href={`?page=${index+1}`}>
                        {index+1}
                    </Link>
                ))}
            </nav>

            <Link
                className={!hashNextPage ? css.btn_inactive : css.btn_active}
                href={`?page=${+searchParams.page + 1}`}>
                Next
            </Link>
        </div>
    );
};

export default Pagination;