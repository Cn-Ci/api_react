import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/styles/menuItem.css';
import './components/styles/activity.css';
import {Router} from './components';
import Spinner from 'react-bootstrap/Spinner'

function App() {
  return (
    <div className="Home">
        <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Router />
        
    </div>
  );
}

export default App;
