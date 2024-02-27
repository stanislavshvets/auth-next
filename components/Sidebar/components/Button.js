import Image from "next/image";
import { arrow } from "@/components/assets/svg"
import css from "@/styles/sidebar/button.module.css";

const Button = (props) => {

    const {ModalClose, setModalClose} = props;

    return (
        <button className={`${css.expand_btn} ${ModalClose ? css.rotate : ``}`} onClick={() => setModalClose(prev=> !prev)}>
           <Image src={arrow} alt={'arrow'} width={16} height={16} priority />
        </button>
    );
};

export default Button;