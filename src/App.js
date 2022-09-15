import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

import NavBar from './Components/NavBar/NavBar'
import Routing from './router'

import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar2 from './Components/NavBar2/NavBar2'
import { useAuth } from './hooks/useAuth'

function App() {
  const { loading } = useAuth()

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {/* <NavBar /> */}
          <NavBar2 />
          <Container fluid>
            <Routing />
          </Container>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
