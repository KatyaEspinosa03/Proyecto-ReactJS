import {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const MessageSuccess = ({purchaseId}) => {
        const [alert, setAlert] = useState(true);

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
          <Button onClick={() => setAlert(false)} variant="success" style={{ backgroundColor: 'rgb(183, 93, 105)' }}>
            Close me
          </Button>
        </div>
      </Alert>


        </>
    </div>
  )
}

export default MessageSuccess;