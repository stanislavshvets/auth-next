import css from '@/styles/loading.module.css'

const LoadingComp = async () => {

    return (
        <section className={css.conteiner}>
            <svg viewBox="0 0 240 240" height="240" width="240" className={css.pl}>
                <circle
                    stroke-linecap="round"
                    stroke-dashoffset="-330"
                    stroke-dasharray="0 660"
                    stroke-width="20"
                    stroke="#000"
                    fill="none"
                    r="105"
                    cy="120"
                    cx="120"
                    className={`${css.pl__ring} ${css.pl__ring_a}`}
                ></circle>
                <circle
                    stroke-linecap="round"
                    stroke-dashoffset="-110"
                    stroke-dasharray="0 220"
                    stroke-width="20"
                    stroke="#000"
                    fill="none"
                    r="35"
                    cy="120"
                    cx="120"
                    className={`${css.pl__ring} ${css.pl__ring_b}`}
                ></circle>
                <circle
                    stroke-linecap="round"
                    stroke-dasharray="0 440"
                    stroke-width="20"
                    stroke="#000"
                    fill="none"
                    r="70"
                    cy="120"
                    cx="85"
                    className={`${css.pl__ring} ${css.pl__ring_c}`}
                ></circle>
                <circle
                    stroke-linecap="round"
                    stroke-dasharray="0 440"
                    stroke-width="20"
                    stroke="#000"
                    fill="none"
                    r="70"
                    cy="120"
                    cx="155"
                    className={`${css.pl__ring} ${css.pl__ring_d}`}
                ></circle>
            </svg>
        </section>
    );
};

export default LoadingComp;
