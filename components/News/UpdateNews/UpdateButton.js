import Image from "next/image";
import { edit } from "@/components/assets/svg"
import css from "@/styles/DashboardPages/news/updatebutton.module.css";

const UpdateButton = () => {


    return (
        <button className={css.btn}>
            <Image src={edit} alt={'edit'} width={25} height={25} />
        </button>
    );
};

export default UpdateButton;
