import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './login.css'
import { Body, Welcome, Log,Img} from "./styledcomponent/loginstyled";

const img = {
    img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg'
}


const Login = () =>{

return(

<>   
 <Body>
    
     <Img src={img.img} className='img'/>
          <Welcome>Bienvenido</Welcome>
          <Log>Inicia sesión en tu cuenta!</Log>
            <Container className="loginbody">
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                           <Button variant="danger" size="lg">
                           Inicia sesión
                           </Button>
                           </div>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">No tienes cuenta ?<Link to="/register" style={{color:'red'}}>Registrate</Link> </h6>
            </Container>
            </Body>
        </>

)

}



export default Login;