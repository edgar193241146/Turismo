import React from 'react';
import '../assets/css/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div class="footer">
        <div class="top">
            <div>
                <h1>DreamScape</h1>
                <p>Elige tu viaje favorito</p>
            </div>
            <div>
                <a href='https://www.facebook.com/dreamscape'><FaFacebook class="icon"/></a>
                <a href='https://www.instagram.com/dreamscape'><FaInstagram class="icon"/></a>
                <a href='https://www.twitter.com/dreamscape'><FaTwitter class="icon"/></a>
                <a href='https://www.behance.com/dreamscape'><FaBehance class="icon"/></a>
            </div>
        </div>
        <div class="bottom">
            <div>
                <h4>Proyecto</h4>
                <a href='https://www.ejemplo.com'>Registro de cambios</a>
                <a href='https://www.ejemplo.com'>Estado</a>
                <a href='https://www.ejemplo.com'>Licencia</a>
                <a href='https://www.ejemplo.com'>Todas las versiones</a>
            </div>
            <div>
                <h4>Comunidad</h4>
                <a href='https://www.ejemplo.com'>GitHub</a>
                <a href='https://www.ejemplo.com'>Asuntos</a>
                <a href='https://www.ejemplo.com'>Proyecto</a>
                <a href='https://www.ejemplo.com'>Twitter</a>
            </div>
            <div>
                <h4>Ayuda</h4>
                <a href='https://www.ejemplo.com'>Soporte</a>
                <a href='https://www.ejemplo.com'>Solución de problemas</a>
            </div>
            <div>
                <h4>Otros</h4>
                <a href='https://www.ejemplo.com'>Equipos de servicio</a>
                <a href='https://www.ejemplo.com'>Política de privacidad</a>
                <a href='https://www.ejemplo.com'>Licencia</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer