import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap'

import './NavBar.css'
import navBarLinks from './navBarLinks'

const NavBar2 = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='ligth' className='p-0 navbar'>
      <Navbar.Brand className='ms-3 p-0'>
        <NavLink
          to='/'
          style={({ isActive }) => ({
            color: isActive ? 'navbrand-disabled' : ''
          })}
        >
          <img
            src='https://res.cloudinary.com/dwtkwakbc/image/upload/v1660770518/LOGO-SOMOS_MAS_uyr5wi.png'
            width='100'
            height='100'
            alt='logo'
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav ' />
      <Navbar.Collapse>
        <Nav className='justify-content-end' style={{ width: '100%' }}>
          {navBarLinks.map(link => (
            <Nav.Link
              as={NavLink}
              to={link.url}
              style={({ isActive }) => ({
                color: isActive ? 'active' : ''
              })}
              key={link.url}
            >
              {link.name}
            </Nav.Link>
          ))}
          <Button
            as={NavLink}
            className='btn-login'
            variant='outline-dark'
            to='/login'
          >
            Iniciar Sesión
          </Button>
          <Button as={NavLink} className='btn-rojo' to='/register'>
            Regístrate
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar2
