import React, { useState } from 'react';
import {Button, Form,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Body, Welcome, Log,Container,FormInputRow,FormLabel,FormInput,FormRow} from "../login/styledcomponent/loginstyled";
import { Img } from "./styledregister/registrerstyled";
import {img} from '../login/const'

const Registration = () =>{

    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    
	const formData = [
		{ label: 'nombre', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Contraseña',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
    ]

return(

<>        
<Body>
    
    <Img src={img.img}  alt="Imagen Bienvenida"/>
         <Welcome>Bienvenido</Welcome>
         <Log>Regístrate!</Log>
           <Container>
              <FormRow>
                       <Form>
                       {formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}
                           <div className="d-grid gap-2">
                          <Button variant="danger" size="lg" type="submit">
                          Registrarse
                          </Button>
                          </div>
                       </Form>
                       </FormRow>
               <h6 className="mt-5 p-5 text-center text-secondary ">Ya tienes cuenta ?<Link to='/login' style={{color:'red'}}>Inicia sesión</Link> </h6>
           </Container>
           </Body>
        </>

)

}



export default Registration;