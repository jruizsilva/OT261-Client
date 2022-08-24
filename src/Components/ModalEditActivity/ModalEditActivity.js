import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

export const ModalEditActivity = ({ show, handleClose }) => {
  const { activityToEdit } = useSelector((state) => state.activities);

  const formik = useFormik({
    initialValues: {
      title: activityToEdit.title,
    },
    onSubmit: () => {
      console.log(formik.values);
    },
  });
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Actualiza el titulo de la actividad'
              autoFocus
              name='title'
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button type='submit' variant='primary'>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
