import {useState} from 'react';
import CarWidget from '../CarWidget/CarWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    const [value,setValue] = useState("");
    const [userData, setUserData] = useState({});

    console.log(userData)

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

   console.log(userInput)

   // hago la llamada al json y pido que lo encuentre de acuerdo a la propiedad de artistName
   fetch("./data.json")
   .then((response) => response.json())
   .then ((data) => {
    const foundItems = data.filter((item) => item.artistName === userInput);
    if (foundItems.length > 0){
        setUserData(foundItems);
    }else{
        console.log("Item not found");
    }
   })
   .catch((error) => console.error(error));
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
            type="submit" >
                Search
            </Button>
          </Form>
            <div>
        <CarWidget />
            </div>
    </Container>
</Navbar>


    )
}


export default NavBar