import "./banner.css"
import ellipse from "../../components/images/ellipse.png"
import Fisio from "../../components/images/Leonia.png"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">

                <div className="banner-heading">
                    <h2>Toda coisa boa<br />começa com boa<br />saúde</h2>
                </div>

                <div className="banner-subheading">
                    <p>Estou aqui para atender as pessoas com atendimento centrado no paciente, oferecendo cuidados de saúde excepcionais para vidas melhores.</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button">Solicitar consulta</button>
                    <button className="banner-learn-button">Saiba mais</button>
                </div>

            </div>

            <div className="banner-graphic">
                <img src={ellipse} alt="ellipse" />
                <img src={Fisio} alt="Fisioterapeuta Leônia"/>
            </div>

        </div>
    )
}

export default Banner
