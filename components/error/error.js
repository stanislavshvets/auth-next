import css from '@/styles/error.module.css'
import img from '@/components/error/assets/programmer.gif'
import Image from "next/image";

export default function Error() {

    return (
            <section className={css.conteiner}>
                <Image src={img} alt={'Error-gif'} width={500} height={314} priority={true}/>
                <div className={css.txt_conteiner}>
                    <h2 className={css.h2}>Вибачте! Щось пішло не так!</h2>
                    <p className={css.p}>Ми намагаємось вирішити проблему у найкоротший термін!</p>
                </div>
            </section>
    )
}
