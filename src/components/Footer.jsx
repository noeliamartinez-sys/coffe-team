import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Dirección</h3>
        <p>Montevideo, Uruguay</p>

        <h3>Horarios</h3>
        <p>Lunes a Sábado</p>
        <p>09:00 - 22:00</p>
      </div>

      <div className="footer-redes">
        <h3>Seguinos</h3>

        <div className="iconos">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2026 Café de Altura</p>
      </div>
    </footer>
  );
}

export default Footer;
