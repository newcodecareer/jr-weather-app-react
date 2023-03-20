import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function mySpinner() {
  return (
    <Spinner animation="border" role="status" className='spinner'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default mySpinner;