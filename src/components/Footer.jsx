import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="newsletter">
        <h2>Enterate primero de novedades, promociones y más</h2>

        <div className="newsletter-form">
          <input type="email" placeholder="Ingresa tu e-mail" />

          <button>Suscribirme</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-columna">
            <h3>Contacto</h3>

            <p>📍 Montevideo, Uruguay</p>
            <p>📞 099 123 456</p>
            <p>✉ cafe@altura.com</p>
          </div>

          <div className="footer-columna">
            <h3>Horarios</h3>

            <p>Lunes a Sábado</p>
            <p>09:00 - 22:00</p>

            <p>Domingos</p>
            <p>10:00 - 18:00</p>
          </div>

          <div className="footer-columna">
            <h3>Seguinos</h3>

            <div className="iconos">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="pagos">
          <h3>Medios de pago</h3>

          <div className="tarjetas">
            <span>💳 Visa</span>
            <span>💳 MasterCard</span>
            <span>💳 American Express</span>
            <span>🏦 BROU</span>
            <span>🟦 Mercado Pago</span>
            <span> Abitab</span>
            <span> RedPagos</span>
          </div>
        </div>

        <div className="footer-copy">
          <p>© 2026 Café de Altura - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;