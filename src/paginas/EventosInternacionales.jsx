import Carousel from 'react-bootstrap/Carousel';
import Header from "../componentes/Header";
import { Link } from 'react-router-dom';
import { festivalsData } from '../data/festivalData';
import Footer from '../componentes/Footer';




const EventosInternacionales = () => {
  return (
    <>
     <div>
       <Header/>
        <Carousel fade className="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src="/public/img/evento-internacional.jpg" alt="First slide"/>
                <div className="overlay"></div>
                <Carousel.Caption>
                <h5>Descubre los eventos internacionales</h5>
                <p className="carousel-text">México es sede de eventos internacionales de renombre mundial que atraen a visitantes de todas partes del globo, desde festivales
                de música hasta eventos deportivos, siempre hay algo emocionante sucediendo en nuestro país.<br/>
                !ÚNETE A LA CELEBRACIÓN Y VIVE EXPERIENCIAS INOLVIDABLES QUE TE DEJARÁN CON GANAS DE MÁS¡
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="card-grid">
        {festivalsData.map((festival, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-front">
                <img src={festival.image} className="font-card" alt={festival.title} />
                <h3 className="font-text">{festival.title}</h3>
              </div>
              <div className="card-back">
                <h3>{festival.title}</h3>
                <p>{festival.description}</p>
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

export default EventosInternacionales