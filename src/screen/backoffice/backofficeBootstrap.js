import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Stack, Col, Card, Button } from 'react-bootstrap';
import { icons } from '../../assets';
import styled from 'styled-components';

const cardList = [
  { id: 1, title: 'Novedades', image: icons.news },
  { id: 2, title: 'Actividades', image: icons.activities },
  { id: 3, title: 'Categorias', image: icons.categories },
  { id: 4, title: 'Testimonios', image: icons.testimonials },
  { id: 5, title: 'Organización', image: icons.organization },
  { id: 6, title: 'Slides', image: icons.slides },
  { id: 7, title: 'Usuarios', image: icons.users },
  { id: 8, title: 'Miembros', image: icons.members },
];

const StyledContainer = styled(Stack)`
  background-color: #edf2f7;
  min-height: 100vh;
`;
const StyledHeader = styled(Stack)`
  height: 60px;
  background-color: #fff;
`;

export const BackofficeBootstrap = () => {
  return (
    <StyledContainer>
      <StyledHeader as='header' className='border-bottom mb-4 mb-xl-5'>
        <Container></Container>
      </StyledHeader>
      <Stack as='main'>
        <Container>
          <Row as='ul' className='ps-0'>
            {cardList.map(({ title, image, id }) => (
              <Col
                key={id}
                sm={6}
                md={6}
                lg={4}
                xl={3}
                as='li'
                className='mb-3'
              >
                <Card>
                  <Card.Body className='text-center'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img
                      variant='top'
                      src={image}
                      className='w-25 mx-auto mb-2'
                    />
                    <Button variant='primary' className='mx-auto'>
                      Ir
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Stack>
    </StyledContainer>
  );
};
