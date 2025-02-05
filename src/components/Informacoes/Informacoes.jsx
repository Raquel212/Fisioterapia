import "./informacoes.css"
import informacoes1 from "../../components/images/exemplo1.jpg"
import informacoes2 from "../../components/images/exemplo2.jpg"

const Informacoes = () => {
  return (
    <div className="informacoes-container">
        <h3>Saiba mais</h3>

        <div className="informacoes-wrapper">

            <div className="informacoes-details">
                <div className="informacoes-detail-head">
                    <h6>Texto ilustrativo<br />Texto ilustrativo Texto ilustrativo</h6>
                </div>
                <div className="informacoes-detail-body">
                    <p>Texto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativoTexto ilustrativo</p>
                </div>
                <div className="informacoes-detail-button">
                </div>
            </div>

            <div className="informacoes-images">
                <img className="informacoes1" src={informacoes1} alt="informacoes1" />
                <img className="informacoes2" src={informacoes2} alt="informacoes2" />
            </div>

        </div>
    </div>
  )
}

export default Informacoes