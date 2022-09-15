import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

import NavBar from './Components/NavBar/NavBar'
import Routing from './router'

import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar2 from './Components/NavBar2/NavBar2'
import { useState } from 'react'
import { httpAxiosInstance } from './Services/httpAxiosInstance'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(false)
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    if (token && !user) {
      httpAxiosInstance
        .get('/auth')
        .then(response => {
          console.dir(response)
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }, [token, user])

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
