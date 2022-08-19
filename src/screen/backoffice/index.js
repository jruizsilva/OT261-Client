import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  Stack,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Offcanvas,
} from 'react-bootstrap';
import { icons } from '../../assets';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const adminCardList = [
  { id: 1, title: 'Novedades', image: icons.news },
  { id: 2, title: 'Actividades', image: icons.activities },
  { id: 3, title: 'Categorias', image: icons.categories },
  { id: 4, title: 'Testimonios', image: icons.testimonials },
  { id: 5, title: 'Organización', image: icons.organization },
  { id: 6, title: 'Slides', image: icons.slides },
  { id: 7, title: 'Usuarios', image: icons.users },
  { id: 8, title: 'Miembros', image: icons.members },
  { id: 9, title: 'Editar perfil', image: icons.edit },
];
const userCardList = [{ id: 1, title: 'Editar perfil', image: icons.edit }];

const StyledContainer = styled(Stack)`
  background-color: #edf2f7;
  min-height: 100vh;
`;
const StyledHeader = styled(Stack)`
  height: 60px;
  background-color: #fff;
`;

const Backoffice = () => {
  const { user, isAdmin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return (
    <StyledContainer>
      <StyledHeader as='header' className='border-bottom mb-4 mb-xl-5'>
        <Container className='h-100'>
          <Navbar expand={false} className='mb-3 h-100'>
            <Container fluid>
              <Navbar.Brand href='#'>Somos más</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${false}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement='end'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                    Somos más
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link href='#action1'>Inicio</Nav.Link>
                    <Nav.Link href='#action2'>Editar perfil</Nav.Link>
                    <Nav.Link href='#action3'>Cerrar sesión</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Container>
      </StyledHeader>
      <Stack as='main'>
        <Container>
          <Row as='ul' className='ps-0 list-unstyled'>
            {isAdmin
              ? adminCardList.map(({ title, image, id }) => (
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
                      <Card.Body className='text-center d-flex flex-column'>
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
                ))
              : userCardList.map(({ title, image, id }) => (
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
                      <Card.Body className='text-center d-flex flex-column'>
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

export default Backoffice;
