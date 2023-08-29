import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CongratulationsModal = ({ isOpen, message, onClose }) => (
  <Modal isOpen={isOpen} toggle={onClose}>
    <ModalHeader>Felicidades</ModalHeader>
    <ModalBody>{message}</ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onClose}>
        Cerrar
      </Button>
    </ModalFooter>
  </Modal>
);

export default CongratulationsModal;
