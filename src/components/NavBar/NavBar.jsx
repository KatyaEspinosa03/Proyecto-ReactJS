import React from 'react';
import CarWidget from '../CarWidget/CarWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {

    return (
<Navbar className="navbar sticky-top"> 
    <Container className="justify-content-center nav">
            <Nav.Link href="/" className='nav nav-link'>Inicio</Nav.Link>
            <NavDropdown title="Artistas" id="basic-nav-dropdown" className='dropdown' >
                <div className='dropdown-item'>
              <NavDropdown.Item href="#action/3.1">Bandas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Solistas </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link href="/about" className='nav nav-link'>Sobre nosotros</Nav.Link>
            <div>
        <CarWidget />
            </div>
    </Container>
</Navbar>

    )
}


export default NavBar