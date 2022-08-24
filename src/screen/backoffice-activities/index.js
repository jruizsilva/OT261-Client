import React from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { StyledContainer } from './styles';

import { listActivities } from './consts';

export const BackofficeActivities = () => {
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
        Swal.fire('Borrado!', 'Actividad borrada con exito.', 'success');
      }
    });
  };

  return (
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
              {listActivities.map(({ id, title }) => (
                <tr key={id}>
                  <td className='text-center'>{id}</td>
                  <td className='text-center'>{title}</td>
                  <td className='text-center d-flex justify-content-center gap-2 '>
                    <Button variant='warning' size='sm'>
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
  );
};
