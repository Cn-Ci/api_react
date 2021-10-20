import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import seloger from "../components/assets/img/seloger.jpeg";

export const SeLoger = () => {
      
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="text-center">
            <h2>Pour vous loger, il vous faut remplir certaines conditions</h2>
        <Button className="mt-3" variant="secondary" onClick={handleShow}>
            Voir les conditions
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Les conditions </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Il vous faut</h4>
                <ul>
                    <li>- être inscrit à Mole Emploi</li>
                    <li>- être un être humain</li>
                    <li>- Savoir quel est la capital de l'Italie</li>
                </ul> 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        
        <div className="d-flex justify-content-center mt-4">
        <img className="rounded" src={seloger} alt="se loger" width="200px"/>

        </div>
        <p className="m-3 text-white">Si vous remplissez toutes ces conditions alors n'attendez plus contactez nous !</p>
        </div>
    );  
};

export default SeLoger;