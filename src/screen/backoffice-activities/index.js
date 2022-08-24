import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container, Nav, Stack, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { StyledContainer } from './styles';
import {
  deleteActivityAsync,
  setActivityToEdit,
  removeActivityToEdit,
} from '../../store/slice/activities';
import { ModalEditActivity } from '../../Components/ModalEditActivity/ModalEditActivity';

export const BackofficeActivities = () => {
  const { activities, activityToEdit } = useSelector(
    (state) => state.activities
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    dispatch(removeActivityToEdit());
    setShow(false);
  };

  const handleEditClick = (id) => {
    setShow(true);
    const activityToEdit = activities.find((activity) => activity.id === id);
    dispatch(setActivityToEdit(activityToEdit));
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
      <StyledContainer className='pt-4'>
        <Stack as='main'>
          <Container>
            <Nav>
              <Nav.Item>
                <LinkContainer to='/backoffice'>
                  <Nav.Link>Regresar</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
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
      {activityToEdit && (
        <ModalEditActivity show={show} handleClose={handleClose} />
      )}
    </>
  );
};
