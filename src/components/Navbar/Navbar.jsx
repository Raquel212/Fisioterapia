import "./navbar.css"
import logo from "../../components/images/logo.png"

const Navbar = () => {
    return (
      <div className="navbar-container">
  
        <div className="logo">
          <img src={logo} alt="medic-logo" />
        </div>
  
        <div className="nav-items">
          <h3>Sobre</h3>
          <h3>Serviços</h3>
          <h3>Depoimentos</h3>
          <h3>Contato</h3>
        </div>
  
  
  
      </div>
    )
  }
  
  export default Navbar