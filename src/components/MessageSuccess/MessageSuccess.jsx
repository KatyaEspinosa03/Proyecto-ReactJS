import {useState, useContext} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {CartContext} from "../Cartcontext/CartContext"

const MessageSuccess = ({purchaseId}) => {
        const [alert, setAlert] = useState(true);

        const {removeAllItems} = useContext(CartContext)

        const handleClose = () => {
          setAlert(false);
          removeAllItems();
        };

  return (
    <div className='alert'>
        <>
         <Alert show={alert} variant="success">
        <Alert.Heading> Felicidades, tu compra ha sido registrada. </Alert.Heading>
        <p>
          Toma nota de tu número de orden con el cual podrás darle seguimiento:
        </p>
        <h5>
          {purchaseId}
        </h5>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant="success" style={{ backgroundColor: 'rgb(183, 93, 105)' }}>
            Close me
          </Button>
        </div>
      </Alert>


        </>
    </div>
  )
}

export default MessageSuccess;