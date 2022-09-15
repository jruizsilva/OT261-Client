import { Container } from 'react-bootstrap'

import NavBar from './Components/NavBar/NavBar'
import Routing from './router'

import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar2 from './Components/NavBar2/NavBar2'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar2 />
      <Container fluid>
        <Routing />
      </Container>
      <Footer />
    </>
  )
}

export default App
