import React from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import { StyledContainer } from './styles';

import { listActivities } from './consts';

export const BackofficeActivities = () => {
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
                    <Button variant='danger' size='sm'>
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
