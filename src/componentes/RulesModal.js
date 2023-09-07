import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const RulesModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Juego Battle-Ship. <br />Reglas del juego</ModalHeader>
      <ModalBody>
        <ul>
          <li>Tu objetivo es hundir la flota enemiga de la CPU antes que esta lo haga antes.
          </li>
          <li>Tus barcos se colocan de manera aleatoria presionando el boton "Colocar barcos/Reset",
            puedes presionarlo hasta que la ubicacion de los barcos sea de tu gusto,y para comenzar solo ataca al tablero enemigo.
          </li>
          <li>Cuando un disparo alcanza un barco la celda se torna roja, y si el disparo cae en el agua se torna celeste.</li>
        </ul>
      </ModalBody>
      <div className="text-center">
        <Button color="secondary" className="btn-sm m-4" style={{ width: '10rem' }} onClick={toggle}>Comenzar</Button>
      </div>
    </Modal>
  );
};
  
export default RulesModal;
