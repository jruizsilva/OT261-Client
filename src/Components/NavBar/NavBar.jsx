import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

import "./NavBar.css";

const NavBar = () => {
  const locate = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(locate.pathname);
  }, [locate]);

  return (
    <Navbar collapseOnSelect expand="md" bg="ligth" className="p-0 navbar">
      <Navbar.Brand className="ms-3 p-0">
        <img
          src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1660770518/LOGO-SOMOS_MAS_uyr5wi.png"
          width="150"
          height="120"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link
            as={Link}
            to={"/"}
            className={url === "/" ? "me-2 active" : "me-2"}
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/about"}
            className={url === "/about" ? "me-2 active" : "me-2"}
          >
            Nosotros
          </Nav.Link>
          <Nav.Link
            className={url === "/news" ? "me-2 active" : "me-2"}
            as={Link}
            to={"/news"}
          >
            Novedades
          </Nav.Link>
          <Nav.Link
            className={url === "/testimonials" ? "me-2 active" : "me-2"}
            as={Link}
            to={"/testimonials"}
          >
            Testimonios
          </Nav.Link>
          <Nav.Link
            className={url === "/contact" ? "me-2 active" : "me-2"}
            as={Link}
            to={"/contact"}
          >
            Contacto
          </Nav.Link>
          <Nav.Link
            className={url === "/contributes" ? "me-2 active" : "me-2"}
            as={Link}
            to={"/contributes"}
          >
            Contribuye
          </Nav.Link>
          <Button
            as={Link}
            className="me-2 btn-login"
            variant="outline-dark"
            to="/login"
          >
            {" "}
            Log in
          </Button>
          <Button as={Link} className="me-4 btn-register" to="/register">
            {" "}
            Registrate
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
