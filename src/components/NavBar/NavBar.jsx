import {useState} from 'react';
import CarWidget from '../CarWidget/CarWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {NavLink, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';

const NavBar = () => {

    const [value,setValue] = useState("");

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setValue(e.target.value);
        
    }

const handleOnSubmit = (e) => {
    e.preventDefault()

    // Hago que cada palabra que el usuario ingrese tenga la primera letra en mayúscula para que coincida con el json
    const userInput = value.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
    // utilizo navigate para ser redireccionado a otra ruta para mostrar las tarjetas generadas
    navigate(`/artist/${userInput}`)
    // Retomo setValue para regresarlo a vacio cuando el usuario de click en buscar 
    setValue("")

console.log(userInput)
}
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
            <Form className="d-flex form" onSubmit={handleOnSubmit}>
            <Form.Control
              type="search"
              placeholder="Busca por artista"
              className="me-2"
              aria-label="Search"
              value = {value}
              onChange={handleOnChange}
            />
            <Button variant="outline-success" 
            className='custom-btn' 
            type="submit"
            disabled ={!value} >
                Buscar
            </Button>
          </Form>
          <Dropdown alignright="true">
            <Dropdown.Toggle  className='cart-dropdwn'>
              <div>
              <CarWidget />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu'>
              <span> El carrito está vacío </span>
            </Dropdown.Menu>
          </Dropdown>
    </Container>
</Navbar>


    )
}


export default NavBar