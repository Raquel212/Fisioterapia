import styles from "./localidade.module.css";
import { FaWhatsapp} from "react-icons/fa";

function Localidade() {
    const locais = [
        {
            nome: "CLÍNICA YURI REZENDE:",
            endereco: "R. Cláudio Batista, Palestina, Aracaju - SE",
            mapaIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.528566196568!2d-37.093376!3d-10.892083199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab33923840f69%3A0xf59298e8cc2935cf!2sHospital%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1738795043157!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            whatsappLink: "https://wa.me/seu-numero",
        },
        {
            nome: "INSTITUTO YURI REZENDE:",
            endereco: "R. Cláudio Batista, Palestina, Aracaju - SE",
            mapaIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.528566196568!2d-37.093376!3d-10.892083199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab33923840f69%3A0xf59298e8cc2935cf!2sHospital%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1738795043157!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            whatsappLink: "https://wa.me/seu-numero",
        },
        {
            nome: "INSTITUTO YURI REZENDE:",
            endereco: "R. Cláudio Batista, Palestina, Aracaju - SE",
            mapaIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.528566196568!2d-37.093376!3d-10.892083199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab33923840f69%3A0xf59298e8cc2935cf!2sHospital%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1738795043157!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            whatsappLink: "https://wa.me/seu-numero",
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>ONDE ATENDO:</h1> 
            <div className={styles.localidadeContainer}>
                {locais.map((local, index) => (
                    <div key={index} className={styles.card}>
                        <div dangerouslySetInnerHTML={{ __html: local.mapaIframe }} />
                        <h3>{local.nome}</h3>
                        <p>{local.endereco}</p>
                        <a href={local.whatsappLink} target="_blank" className={styles.whatsappButton}>
                            <FaWhatsapp /> Agende sua consulta via WhatsApp
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Localidade;
