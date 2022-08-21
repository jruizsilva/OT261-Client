import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  Container,
  Row,
  Stack,
  Col,
  Navbar,
  Offcanvas,
  Nav,
} from 'react-bootstrap';

import { adminCardList, userCardList } from './consts';
import { StyledContainer, StyledHeader } from './styles';
import { CardBackoffice } from '../../Components/CardBackoffice';

const Backoffice = () => {
  const { user, isAdmin } = useSelector((state) => state.user);

  return (
    <>
      {!user && <Navigate to='/' replace />}
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
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${false}`}
                    >
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
              {isAdmin &&
                adminCardList.map(({ id, ...rest }) => (
                  <Col
                    key={id}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    as='li'
                    className='mb-3'
                  >
                    <CardBackoffice {...rest} />
                  </Col>
                ))}
              {!isAdmin &&
                userCardList.map(({ id, ...rest }) => (
                  <Col
                    key={id}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    as='li'
                    className='mb-3'
                  >
                    <CardBackoffice {...rest} />
                  </Col>
                ))}
            </Row>
          </Container>
        </Stack>
      </StyledContainer>
    </>
  );
};

export default Backoffice;
