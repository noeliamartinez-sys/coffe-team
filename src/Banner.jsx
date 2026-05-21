import './Banner.css'
import bannerImg from './assets/Banner.jpg' 

function Banner() {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-content">
        <h1>EL ARTE DE UNA BUENA MAÑANA</h1>
        <p>Café de especialidad tostado localmente</p>
        <button className="banner-btn">VER LA CARTA</button>
      </div>
    </section>
  )
}

export default Banner