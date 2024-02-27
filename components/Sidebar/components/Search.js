import { useEffect } from "react";
import Image from "next/image";
import { magnifier } from "@/components/assets/svg"
import css from "@/styles/sidebar/search.module.css"

const Search = (props) => {
    const { ModalClose, setModalClose, message, setMessage } = props;

    const clearField = () => {
        setMessage('');
    };

    useEffect(()=> {
            clearField()
    }, [ModalClose])

    const handleChange = event => {
        setMessage(event.target.value);
    };

    return (
        <div className={css.search__wrapper} onFocus={() => setModalClose(false)}>
            <Image src={magnifier} alt={'magnifier icon'} width={24} height={24} className={css.img}/>
            <input type="text" className={css.input}  onChange={handleChange} value={message} />
        </div>
    );
};

export default Search;