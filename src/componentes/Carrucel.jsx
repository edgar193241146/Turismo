

import { carouselData } from '../data/carruselData';
import Carousel from 'react-bootstrap/Carousel';

const Carrucel = () => {
  return (
    <>
      <Carousel fade className="custom-carousel" indicators={false}>
      {carouselData.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.imageSrc} alt={`Slide ${index + 1}`} />
          <div className="overlay"></div>
          <Carousel.Caption>
            <h5>{slide.caption}</h5>
            <p className="carousel-text">{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  )
}

export default Carrucel