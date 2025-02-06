import styles from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.footerBrand}>
                    <h2>Cuidando de você com <span>dedicação e carinho</span></h2>
                    <p>Seu bem-estar em primeiro lugar, com um atendimento profissional e humanizado.</p>
                </div>

                {/* <div className={styles.footerCTA}>
                    <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                        <FaWhatsapp /> Agende sua Consulta
                    </a>
                </div> */}
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerLinks}>
                    <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="mailto:seuemail@email.com">
                        <FaEnvelope /> E-mail
                    </a>
                </div>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Clínica de Fisioterapia - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
