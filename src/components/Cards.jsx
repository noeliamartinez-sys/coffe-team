import espresso from "../assets/espresso.jpg"
import latte from "../assets/latte.jpg"
import toast from "../assets/toast.jpg"
import roll from "../assets/roll.jpg"
import cafe from "../assets/cafe.jpg"
function Cards() {

  // Productos destacados
  const products = [
    {
      title: "Café exprés",
      price: "$120",
      image: espresso
    },
    {
      title: "Latte",
      price: "$180",
      image: latte
    },
    {
      title: "Tostada de aguacate",
      price: "$290",
      image: toast
    },
    {
      title: "Roll de canela",
      price: "$160",
      image: roll
    }
  ]

  // Función del botón ordenar
  const handleOrder = (productName) => {
    alert(`Tu pedido de ${productName} fue agregado correctamente ☕`)
  }

  return (

    <section
      className="container-fluid py-5"
      style={{
        backgroundColor: "#F4EFDF",
        width: "100%",
        paddingBottom: "80px"
      }}
    >

      {/* TITULO */}
      <h2
        className="text-center mb-5"
        style={{
          color: "#4B3621",
          fontSize: "50px",
          fontWeight: "500",
          fontFamily: "time, serif",
          letterSpacing: "2px"
        }}
      >
        NUESTROS FAVORITOS
      </h2>

      {/* CARDS */}
      <div className="row justify-content-center g-4">

        {products.map((product, index) => (

          <div
            className="col-md-3 d-flex justify-content-center"
            key={index}
          >

            <div

              // Animación hover card
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px) scale(1)"
              }}

              className="card border-0"

              style={{
                width: "240px",
                borderRadius: "22px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
              }}
            >

              {/* IMAGEN */}
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"

                style={{
                  height: "210px",
                  objectFit: "cover"
                }}
              />

              {/* CONTENIDO */}
              <div
                className="card-body d-flex flex-column align-items-center"
              >

                {/* TITULO PRODUCTO */}
                <h4
                  style={{
                    color: "#4B3621",
                    fontSize: "22px",
                    fontWeight: "600",
                    textAlign: "center",
                    minHeight: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    fontFamily: "arial",
                  }}
                >
                  {product.title}
                </h4>

                {/* PRECIO */}
                <p
                  style={{
                    fontSize: "23px",
                    color: "#7A5C3E",
                    fontWeight: "500",
                    marginBottom: "18px"
                  }}
                >
                  {product.price}
                </p>

                {/* BOTON */}
                <button

                  // Hover botón
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#C5B69C"
                    e.target.style.transform = "scale(1.05)"
                  }}

                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#D7C6A3"
                    e.target.style.transform = "scale(1)"
                  }}

                  // Click botón
                  onClick={() => handleOrder(product.title)}

                  className="btn"

                  style={{
                    backgroundColor: "#D7C6A3",
                    color: "#4B3621",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    border: "none",
                    width: "120px",
                    fontWeight: "600",
                    fontSize: "17px",
                    transition: "all 0.3s ease"
                  }}
                >
                  Ordenar
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>
      {/* SOBRE NOSOTROS */}

      <div
        className="container mt-5"
        style={{
          paddingTop: "80px"
        }}
      >

        <div className="row align-items-center">

          {/* IMAGEN */}

          <div className="col-md-6 mb-4">

            <img
              src={cafe}
              alt="Cafetería"

              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
              }}
            />

          </div>

          {/* TEXO */}

          <div className="col-md-6">

            <h2
              style={{
                color: "#4B3621",
                fontSize: "42px",
                fontFamily: "Georgia, serif",
                marginBottom: "25px"
              }}
            >
              SOBRE NOSOTROS
            </h2>

            <p
              style={{
                color: "#5C4432",
                fontSize: "19px",
                lineHeight: "1.9",
                fontWeight: "400"
              }}
            >
              En Café de Altura creemos que cada taza cuenta una historia.
              Somos una cafetería de especialidad apasionada por el café
              tostado localmente, los sabores auténticos y las experiencias
              cálidas.

              <br /><br />

              Trabajamos con granos seleccionados cuidadosamente y ofrecemos
              una carta artesanal que combina cafés clásicos, pastelería
              fresca y opciones gourmet preparadas al momento.

              <br /><br />

              Nuestro espacio fue diseñado para disfrutar pausadamente,
              compartir conversaciones y transformar cada visita en un
              pequeño ritual cotidiano.
            </p>

          </div>

        </div>

      </div>
    </section>
    
  )
}

export default Cards