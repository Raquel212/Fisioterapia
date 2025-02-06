import Slider from "react-slick";
import { FaHeartbeat, FaRunning, FaWeight, FaStethoscope } from "react-icons/fa";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    const items = [
        { icon: <FaHeartbeat />, title: "Saúde e Qualidade de Vida", description: "Melhore sua mobilidade e viva sem dores." },
        { icon: <FaRunning />, title: "Alto Desempenho", description: "Aprimore sua resistência e força com fisioterapia personalizada." },
        { icon: <FaWeight />, title: "Emagrecimento Consciente", description: "Ajude seu corpo a funcionar melhor e eliminar dores." },
        { icon: <FaStethoscope />, title: "Prevenção de Doenças", description: "Evite problemas futuros e cuide da sua postura." }
    ];

    return (
        <section className={styles.carouselSection}>
            <h2 className={styles.informacaoCarousel}>Transforme seu Corpo com Fisioterapia</h2>
            <h3>(Serviços)</h3>
            <Slider {...settings} className={styles.slider}>
                {items.map((item, index) => (
                    <div key={index} className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.tituloCarousel}>{item.title}</h3>
                            <p className={styles.descricaoCarousel}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Carousel;
