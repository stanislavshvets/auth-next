import Image from "next/image";
import { bin } from "@/components/assets/svg"
import css from "@/styles/DashboardPages/news/delbutton.module.css";

const DelButton = () => {
    return (
        <button className={css.btn}>
            <Image src={bin} alt={'bin'} width={20} height={20} />
        </button>
    );
};

export default DelButton;
