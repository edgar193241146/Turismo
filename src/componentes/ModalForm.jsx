import '../assets/css/ModalForm.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { modalCardData } from '../data/modalCardData';
import { useEffect, useState } from 'react';

const ModalForm = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellidoP, setApellidoP] = useState ("");
    const [apellidoM, setApellidoM] = useState ("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [personas, setPersonas] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const [deValue, setDeValue] = useState("");
    const [hastaValue, setHastaValue] = useState("");
    
    const handleDeChange = (e) => {
        const newValue = e.target.value;
        setDeValue(newValue);
        /*if(hastaValue === ''){
            setHastaValue(newValue);
        }*/
    };

    const handleHastaChange = (e) => {
        setHastaValue(e.target.value);
    };

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
        setApellidoP("");
        setApellidoM("");
        setEmail("");
        setTelefono("");
        setPersonas("");
        setDeValue("");
        setHastaValue("");
      },[isSubmit])
  return (
    <>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Formulario: {modalCardData[0].title}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <input type='text' id ="name" name="name" placeholder='Nombre(s)' maxLength={50}
                    value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    {/* <p className='error'>{formErrors.name}</p> */}
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col md>
                        <input type='text' id ="name" name="ap" placeholder='Apellido Paterno' maxLength={30}
                        value={apellidoP} onChange={(e)=>setApellidoP(e.target.value)}/>
                        {/* <p className='error'>{formErrors.name}</p> */}
                    </Col>
                    <Col md>
                        <input type='text' id ="name" name="am" placeholder='Apellido Materno' maxLength={30}
                        value={apellidoM} onChange={(e)=>setApellidoM(e.target.value)}/>
                        {/* <p className='error'>{formErrors.name}</p> */}
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3">
                    <input type='text' id ="email" name="email" placeholder='Correo electrónico'
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {/* <p className='error'>{formErrors.email}</p> */}
                    <input type='tel' id ="tel" name="tel" placeholder='Número de teléfono/celular'
                    value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                    {/* <p className='error'>{formErrors.tel}</p> */}
                    <input type='number' id ="number" name="number" placeholder='¿Cuántas personas viajarán?'
                    value={personas} onChange={(e)=>setPersonas(e.target.value)} min="0" max="10"/>
                    {/* <p className='error'>{formErrors.asent}</p> */}
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col md>
                        <label>De: (Fecha)</label>
                        <input type='datetime-local' id ="de" name="de" placeholder='De: '
                        vavalue={deValue} onChange={handleDeChange}/>
                        {/* <p className='error'>{formErrors.asent}</p> */}
                    </Col>
                    <Col md>
                        <label>Hasta: (Fecha)</label>
                        <input type='datetime-local' id ="hasta" name="hasta" placeholder='Hasta: '
                        value={hastaValue} onChange={handleHastaChange}/>
                        {/* <p className='error'>{formErrors.asent}</p> */}
                    </Col>
                </Form.Group>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancelar
          </Button>
          <Button variant="success" onClick={props.onHide}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalForm;