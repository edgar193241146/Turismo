import '../assets/css/style.css';
import '../assets/css/Home.css';
import '../assets/css/Carousel.css';
import Carrucel from "../componentes/Carrucel";
import { contentData } from "../data/carruselData";
import Header from "../componentes/Header";
import Footer from '../componentes/Footer';

const Index = () => {
  return (
    <>
      <div>
        <Header />
        {/* llamar el componente carrucel*/}
        <Carrucel />
        <div className="info-home">
          <h1>Con nosotros</h1>
          <p>Descubre la riqueza de nuestra tierra</p>
          {contentData.map((section, index) => (
            <div className={index % 2 === 0 ? 'first-home' : 'first-home-reverse'} key={index}>
              <div className="home-text">
                <h2>{section.title}</h2>
                <p className="text-inf-home">{section.text}</p>
              </div>
              <div className="image-home">
                {section.images.map((image, imageIndex) => (
                  <img key={imageIndex} src={image} alt={`Image ${imageIndex}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Index;