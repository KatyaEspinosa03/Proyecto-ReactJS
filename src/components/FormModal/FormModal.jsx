import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../../Firebase/firebase"
import MessageSuccess from '../MessageSuccess/MessageSuccess';
import { CartContext } from '../Cartcontext/CartContext';



const FormModal = () => {

    const [show, setShow] = useState(false);
    const [purchaseId, setPurchaseId] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { removeAllItems } = useContext(CartContext);

  const initialState = {
    firstName: "",
    lastName: "",
    email: ""
  };



  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setValues({...values, [name]: value});
  }

  const onSubmit =  async (e) => {
    e.preventDefault()
    
    const docRef = await addDoc(collection(db, "ordersCollection"),
    {values,
    });
    setPurchaseId(docRef.id);
    setValues(initialState);
    removeAllItems();
  };

  return (
    <>
    <Button variant="primary" className='cart-btn' onClick={handleShow}>
      Finalizar Compra
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title> Finaliza tu compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form onSubmit={onSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Correo Electrónico"
        className="mb-3"
      >
        <Form.Control 
        type="email" 
        placeholder="name@example.com" 
        name="email"
        value={values.email}
        onChange={handleOnChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Nombre">
        <Form.Control 
        type="text" 
        placeholder="name" 
        name="firstName"
        value={values.firstName}
        onChange={handleOnChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Apellido">
        <Form.Control 
        type="text" 
        placeholder="lastName" 
        name="lastName"
        value={values.lastName}
        onChange={handleOnChange} />
      </FloatingLabel>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ backgroundColor: 'rgb(183, 93, 105)' }} type="submit"> Realizar compra </Button>
      </Modal.Footer>
      </Form>
      </Modal.Body>

      {purchaseId ? (
          <Modal.Footer>
            <MessageSuccess purchaseId={purchaseId} />
          </Modal.Footer>
        ): null}

    </Modal>
  </>
  )
}

export default FormModal;