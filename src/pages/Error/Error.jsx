import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// si la busqueda no arroja resultados, se redirecciona a esta página.
const Error = () => {
  return (
    <Container fluid className='error-page d-flex justify-content-center'>
    <Row>
      <Col className='col-sm-12 my-auto'> Lo sentimos, parece que no tenemos 
      el producto que estás buscando. 
    </Col>
    </Row>
  </Container>
  )
}

export default Error