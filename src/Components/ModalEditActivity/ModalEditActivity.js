import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

export const ModalEditActivity = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar actividad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Actualiza el titulo de la actividad'
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
