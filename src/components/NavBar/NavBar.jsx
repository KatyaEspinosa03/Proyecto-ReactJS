import React from 'react';
import CarWidget from '../CarWidget/CarWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    return (
<Navbar className="navbar sticky-top"> 
    <Container className="justify-content-center nav">
            <Nav.Link as={NavLink} to="/" className='nav nav-link'>Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" className='dropdown' >
                <div className='dropdown-item'>
              <NavDropdown.Item as={NavLink} to="/category/band">Bandas</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to="/category/singer"> Solistas </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about" className='nav nav-link'>Sobre nosotros</Nav.Link>
            <Form className="d-flex form">
            <Form.Control
              type="search"
              placeholder="Busca por artista"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='custom-btn'>Search</Button>
          </Form>
            <div>
        <CarWidget />
            </div>
    </Container>
</Navbar>


    )
}


export default NavBar