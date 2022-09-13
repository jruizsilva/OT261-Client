import { Container } from 'react-bootstrap'

import NavBar from './Components/NavBar/NavBar'
import Routing from './router'

import './App.css'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Routing />
      </Container>
      <Footer />
    </>
  )
}

export default App
