import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutPage = () => {
  return (
    <Container className='cart-page' style={{margin:"5%", width:"85%"}}>
      <Row>
        <Col className='text-center' style={{fontFamily:"Garet-heavy"}}>
        <h1> ¡Bienvenido a Vinil World!</h1>
        </Col>
        </Row>
        <Row>
        <Col className='text-justify' style={{margin:"2%"}}>
        <h4> Somos una tienda especializada en la venta de vinilos.
          Contamos con una gran variedad de artistas.
        </h4>
        <h4>
          Si no encuentras el 
          producto que buscas, no te preocupes, siempre estamos 
          actualizando nuestro inventario. 
        </h4>
        </Col>
        </Row>
        

    </Container>
  )
}

export default AboutPage