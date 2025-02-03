import styles from "./Hero.module.css";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
                <div className={styles.textContainer}>
                    <h1>O Cuidado que Você Merece</h1>
                    <p>Transforme sua saúde e bem-estar com atendimento especializado em fisioterapia.</p>
                    <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        <FaWhatsapp /> Agende sua Consulta
                    </a>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/Modelo01.png" alt="Fisioterapeuta" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
