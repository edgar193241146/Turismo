import Modal from 'react-bootstrap/Modal';
import { modalCardData } from '../data/modalCardData';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import { useState } from 'react';

const ModalCard = (props) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>{modalCardData[0].title}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {modalCardData.map((modal, index) => (
                    <div key={index}>
                        <h4>{modal.date}</h4>
                        <h5>{modal.pack}</h5>
                        <p>{modal.transport}</p>
                        <p>{modal.accomodation}</p>
                        <p>{modal.activities}</p>
                        <p>{modal.coordinator}</p>
                        <p>{modal.travelInsurance}</p>
                        <p>{modal.cost}</p>
                    </div>
                ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => setShowForm(true)}>
                        Agendar
                    </Button>
                </Modal.Footer>
                <ModalForm show={showForm} onHide={() => setShowForm(false)}/>
            </Modal>
        </>
    )
}

export default ModalCard;