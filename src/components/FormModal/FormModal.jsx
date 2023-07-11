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
    const [purchaseId, setPurchaseId] = useState(null)
    const [alertShown, setAlertShown] = useState(false)
 
    const { removeAllItems } = useContext(CartContext);

    const handleClose = () => {
      setShow(false)
      if (alertShown) {
        removeAllItems();
      }
    };
    const handleShow = () => setShow(true);



  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    number: ""
  };



  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target

    // validación para que el usuario solo pueda ingresar letras en el nombre y apellido
    if (name === "firstName" || name === "lastName") {
      const lettersVerified = /^[A-Za-z- ]+$/;
      if (value === "" || value.match(lettersVerified)) {
        setValues({...values, [name]: value});
      }
    } else {
      setValues({...values, [name]: value});
    }
  }


  const onSubmit =  async (e) => {
    e.preventDefault()
      const docRef = await addDoc(collection(db, "ordersCollection"),
      {values,
      });
      setPurchaseId(docRef.id);
      setValues(initialState)
      setAlertShown(true);

/*     removeAllItems(); */
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
      keyboard={false}>

      <Modal.Header closeButton>
        <Modal.Title> Finaliza tu compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>

    <Form onSubmit={onSubmit}>

      <FloatingLabel
        controlId="floatingInput"
        label="Correo Electrónico"
        className="mb-3">
        <Form.Control 
        type="email" 
        placeholder="name@example.com" 
        name="email"
        value={values.email}
        onChange={handleOnChange} 
        required={true}/>
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInput'
        label="confirma tu correo electrónico"
        className='mb-3'>
        <Form.Control 
        type='email'
        placeholder='confirmEmail'
        name="confirmEmail"
        value={values.confirmEmail}
        pattern={values.email}
        onChange={handleOnChange}
        required={true}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Nombre(s)">
        <Form.Control 
        type="text" 
        placeholder="name" 
        name="firstName"
        value={values.firstName}
        onChange={handleOnChange}
        required={true} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Apellido(s)">
        <Form.Control 
        type="text" 
        placeholder="lastName" 
        name="lastName"
        value={values.lastName}
        onChange={handleOnChange} 
        required={true}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Número de teléfono">
        <Form.Control 
        type="number" 
        placeholder="number" 
        name="number"
        value={values.number}
        onChange={handleOnChange} 
        required={true}/>
        </FloatingLabel>

      <Modal.Footer>
        <Button style={{ backgroundColor: 'rgb(183, 93, 105)' }} type="submit"> Realizar compra </Button>
        {purchaseId ? <MessageSuccess purchaseId={purchaseId} /> : null}
      </Modal.Footer>

      </Form>
      </Modal.Body>
    </Modal>

  </>
  )
}

export default FormModal;