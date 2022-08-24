import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';

import './NavBar.css';
import navBarLinks from './navBarLinks';

const NavBar = () => {
  const locate = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(locate.pathname);
  }, [locate]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" className="p-0 navbar">
      <Navbar.Brand className="ms-3 p-0">
        <img
          src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1660770518/LOGO-SOMOS_MAS_uyr5wi.png"
          width="130"
          height="100"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: '100%' }}>
          {navBarLinks.map((link) => (
            <Nav.Link
              as={Link}
              to={link.url}
              className={url === link.url ? 'active' : ''}
              key={link.url}
            >
              {link.name}
            </Nav.Link>
          ))}
          <Button
            as={Link}
            className="btn-login"
            variant="outline-dark"
            to="/login"
          >
            Iniciar Sesión
          </Button>
          <Button as={Link} className="btn-register" to="/register">
            Regístrate
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
