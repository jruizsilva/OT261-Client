import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack, Table, Form, Modal } from 'react-bootstrap';

import Swal from 'sweetalert2';
import { StyledContainer } from './styles';
import { deleteActivityAsync } from '../../store/slice/activities';

export const BackofficeActivities = () => {
  const { activities } = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClick = (id) => {
    handleShow();
    const activityToEdit = activities.find((activity) => activity.id === id);
    console.log(activityToEdit);
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta acción no es reversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteActivityAsync(id));
      }
    });
  };

  return (
    <>
      <StyledContainer className='pt-5'>
        <Stack as='main'>
          <Container>
            <h2 className='h2 text-center mb-4'>Lista de actividades</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th className='text-center'>Titulo</th>
                  <th className='text-center'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {activities.map(({ id, title }) => (
                  <tr key={id}>
                    <td className='text-center'>{id}</td>
                    <td className='text-center'>{title}</td>
                    <td className='text-center d-flex justify-content-center gap-2 '>
                      <Button
                        variant='warning'
                        size='sm'
                        onClick={() => handleEditClick(id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant='danger'
                        size='sm'
                        onClick={() => handleDeleteClick(id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Stack>
      </StyledContainer>
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
                placeholder='Agregue el titulo de la actividad'
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
    </>
  );
};
