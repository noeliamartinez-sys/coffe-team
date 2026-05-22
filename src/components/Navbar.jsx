import "./Navbar.css"
import logo from "../assets/logo-cafe.png"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo-section">
          <img src={logo} alt="Logo Café" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li>Inicio</li>
          <li>Menú</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>

      </div>

    </nav>
  )
}

export default Navbar