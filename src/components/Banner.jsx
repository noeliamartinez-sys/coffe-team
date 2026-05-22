import './Banner.css'
import bannerImg from '../assets/Banner.jpg'
import menuImage from '../assets/menu.png'
import { useState } from "react"

function Banner() {

  const [showMenu, setShowMenu] = useState(false)

  return (

    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >

      <div className="banner-content">

        <h1>EL ARTE DE UNA BUENA MAÑANA</h1>

        <p>Café de especialidad tostado localmente</p>

        <button
          onClick={() => setShowMenu(true)}
          className="menu-btn"
        >
          Ver menú
        </button>

      </div>

      {
        showMenu && (

          <div
            className="menu-overlay"
            onClick={() => setShowMenu(false)}
          >

            <div
              className="menu-image-container"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={menuImage}
                alt="Menú cafetería"
                className="menu-image"
              />

            </div>

          </div>

        )
      }

    </section>

  )
}

export default Banner