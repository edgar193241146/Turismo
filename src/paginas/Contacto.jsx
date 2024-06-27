import '../assets/css/Contacto.css';
import { useEffect, useState } from "react";
import Header from "../componentes/Header"
import Carousel from 'react-bootstrap/Carousel';
import { ServicioContacto } from "../servicios/ServicioContactos";
import Swal from "sweetalert2";
import Footer from '../componentes/Footer';

const Contacto = () => {


    // const initialValues = {name: "", email: "", tel: "", asent: "", msg: ""};
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
  
    // const handleChange = (e) => {
    //   //console.log(e.target);
    //   const {name, value} = e.target;
    //   setFormValues({...formValues, [name]: value});
    //   //console.log(formValues);
    // };
  
    // const handleSubmit = (e) =>{
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
    // };

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Crear objeto con los datos del nuevo contacto
        const datos = { nombre, email, telefono, asunto, mensaje };
  
        // Enviar los datos del nuevo contacto a la API
        await ServicioContacto.crearContacto(datos);
  
       setIsSubmit(true)
        
  
        // Mostrar mensaje de éxito o realizar cualquier acción adicional después de enviar los datos
        Swal.fire({
          icon:"success",
          title:"Enviado",
          text:"Enviado con exito"
        })
      } catch (error) {
        Swal.fire({
          icon:"error",
          title:"Oops",
          text:"Algo salio mal"
        })
      }
    };

    useEffect(()=>{
      setNombre("");
      setEmail("");
      setTelefono("");
      setAsunto("");
      setMensaje("");
    },[isSubmit])
    
    // useEffect(() => {
    //   // Lógica para manejar los errores de validación después de que el usuario haya interactuado con el formulario
    //   if (isSubmit) {
    //     const errors = validate({ nombre, email, telefono, asunto, mensaje });
    //     setFormErrors(errors);
    //   }
    // }, [isSubmit, nombre, email, telefono, asunto, mensaje]);
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //   const regexName = /^[a-zA-Z\s]{2,}$/;
    //   const regexNumber = /[0-9]/;
  
    //   if(!values.name){
    //       errors.name = 'Es obligatorio que coloque su/s nombre/s';
    //   }else if(!regexName.test(values.name)){
    //     errors.name = 'No se aceptan números ni caracteres especiales en este campo';
    //   }else if(values.name.length < 8){
    //     errors.name = 'Este cadena debe tener más de 8 carácteres';
    //   }
    //   if(!values.email){
    //     errors.email = 'Es obligatorio que coloque su correo electrónico';
    //   }else if(!regex.test(values.email)){
    //     errors.email = 'Este correo no es válido';
    //   }
    //   if(!values.tel){
    //     errors.tel = 'Es obligatorio que coloque su número de teléfono/celular para poder contactarte';
    //   }else if(!regexNumber.test(values.tel)){
    //     errors.tel = 'Solo se aceptan números';
    //   }
    //   if(!values.asent){
    //       errors.asent = 'Es obligatorio que ponga el asunto a tratar';
    //   }
    //   if(!values.msg){
    //       errors.msg = 'Es obligatorio que escriba el mensaje a tratar del viaje que quieras viajar específicamente';
    //   }
    //   return errors;
    // };
  return (
    
    <>
    
    <div>
        <Header/>
        <Carousel fade className="custom-carousel" indicators={false} controls={false}>
            <Carousel.Item>
                <img className="d-block w-100" src="/public/img/contacto.jpg" alt="First slide"/>
                <div className="overlay"></div>
                <Carousel.Caption>
                <h5>Contáctanos</h5>
                <p className="carousel-text">¿Listo para tu próxima aventura en México?<br/>
                !CONTÁCTANOS HOY MISMO Y DEJA QUE NUESTROS EXPERTOS EN TURISMO TE AYUDEN A PLANIFICAR EL VIAJE DE TUS SUEÑOS¡ Ya sea que busques relajarte
                en la playa, explorar sitios arqueológicos o sumergirte en la cultura local, estamos aquí para hacer que tu experiencia en México sea inolvidable.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="form-container">
            <h1>Llénanos el formulario para contactarte</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type='text' id ="name" name="name" placeholder='Nombre(s)' maxLength={50}
                value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                {/* <p className='error'>{formErrors.name}</p> */}
                <input type='text' id ="email" name="email" placeholder='Correo electrónico'
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {/* <p className='error'>{formErrors.email}</p> */}
                <input type='tel' id ="tel" name="tel" placeholder='Número de teléfono/celular'
                value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                {/* <p className='error'>{formErrors.tel}</p> */}
                <input type='text' id ="asent" name="asent" placeholder='Asunto'
                value={asunto} onChange={(e)=>setAsunto(e.target.value)}/>
                {/* <p className='error'>{formErrors.asent}</p> */}
                <textarea id="msg" name="msg" placeholder='Mensaje' rows='5'
                value={mensaje} onChange={(e)=>setMensaje(e.target.value)}></textarea>
                {/* <p className='error'>{formErrors.msg}</p> */}
                <button type="submit" className='btn-send'>Enviar</button>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contacto