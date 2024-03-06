import Link from "next/link";
import css from '@/styles/DashboardPages/news/pagination.module.css'

const Pagination = ({ totalPages , hashNextPage, searchParams}) => {

    return (
        <div className={css.main}>
            <Link
                className={( !searchParams.page || +searchParams?.page === 1) ? css.btn_inactive : css.btn_active}
                href={`?page=${(!searchParams.page ? 1 : 
                    (+searchParams.page === 1) ? 1 :
                        (+searchParams.page > 1) ? +searchParams.page - 1 : 1
                )}`}>
                Previous
            </Link>
            <nav className={css.nav_bar}>
                {Array.from({length: totalPages}).map((p, index) => (
                    <Link
                        className={`${css.nav_active_btn} 
                        ${index+1 === +searchParams.page
                            ? css.nav_inactive_btn
                            : ''}`}
                        key={index+1} href={`?page=${index+1}`}>
                        {index+1}
                    </Link>
                ))}
            </nav>
            <Link
                className={!hashNextPage ? css.btn_inactive : css.btn_active}
                href={`?page=${(!searchParams.page || totalPages > 1 ? 2 :
                    !searchParams.page || totalPages === 0 ? 1 :
                        (+searchParams.page >= totalPages) ? totalPages :
                            (+searchParams.page >= 1 && +searchParams.page !== totalPages ) ? +searchParams.page + 1 : 1
                )}`}>
                Next
            </Link>
        </div>
    );
};

export default Pagination;
