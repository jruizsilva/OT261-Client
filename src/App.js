import { Container } from 'react-bootstrap';

import NavBar from './Components/NavBar/NavBar';
import Routing from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Routing />
      </Container>
    </>
  );
}

export default App;
