import '../assets/css/style.css';
import '../assets/css/Carousel.css';
import '../assets/css/Card.css';
import Header from "../componentes/Header";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { cardsData } from '../data/cardsData';
import { useState } from 'react';
import ModalCard from '../componentes/ModalCard';
import Footer from '../componentes/Footer';


const PueblosMagicos = () => {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <>
      <div>
        <Header />
        <Carousel fade className="custom-carousel" indicators={false} controls={false}>
          <Carousel.Item>
            <img className="d-block w-100" src="/public/img/pueblos_magicos.jpg" alt="First slide" />
            <div className="overlay"></div>
            <Carousel.Caption>
              <h5>Descubre los pueblos mágicos</h5>
              <p className="carousel-text">Adéntrate en los encantadores Pueblos Mágicos de México, donde el tiempo parece detenerse y la magia se hace presente, con sus
                calles empedradas, coloridas casas y ambiente acogedor, estos pueblos te transportarán a una época pasada llena de historia y tradicoón.<br />
                !VEN Y DÉJATE CAUTIVAR POR SU ENCANTO ÚNICO¡
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Se manda a llamar la data de las cards y se hace dinamico  con menos codigo*/}
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <div className="card-container" key={index}>
              <div className="card">
                <div className="card-front">
                  <img src={card.image} className="font-card" alt='' />
                  <h3>{card.title}</h3>
                </div>
                <div className="card-back">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="link">
                    <Link to='#' onClick={() => setModalShow(true)}>Ver más detalles</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ModalCard show={modalShow} onHide={() => setModalShow(false)}/>
      </div>
      <Footer/>
    </>
  )
}

export default PueblosMagicos;