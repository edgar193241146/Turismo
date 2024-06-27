import { Link } from "react-router-dom";
import Header from "../componentes/Header"
import Carousel from 'react-bootstrap/Carousel';
import { ecoBioData } from "../data/ecoBioData";
import Footer from "../componentes/Footer";
const Ecoturismo = () => {
  return (
    <>
     <div>
      <Header/>
        <Carousel fade className="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src="/public/img/ecoturismo.jpg" alt="First slide"/>
                <div className="overlay"></div>
                <Carousel.Caption>
                <h5>Descubre los ecoturismos</h5>
                <p className="carousel-text">Explora la naturaleza virgen y la biodiversidad de México a través de nuestras opciones de ecoturismo, desde la observación
                de ballenas en la costa del Pacífico hasta la exploración de selvas tropicales y cascadas escondidas, hay aventuras para todos los amantes de la naturaleza.<br/>
                !VEN Y CONÉCTATE CON EL ENTORNO EN SU ESTADO MÁS PURO¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="card-grid">
        {ecoBioData.map((ecobio, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-front">
                <img src={ecobio.image} className="font-card" alt={ecobio.title} />
                <h3 className="font-text">{ecobio.title}</h3>
              </div>
              <div className="card-back">
                <h3>{ecobio.title}</h3>
                <p>{ecobio.description}</p>
                <div className="link">
                  <Link to='#'>Ver más detalles</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Ecoturismo