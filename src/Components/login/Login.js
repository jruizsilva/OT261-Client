import React, { useState } from 'react';
import {Button,Form,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Body, Welcome, Log,Img, Container,FormInputRow,FormLabel,FormInput,FormRow} from "./styledcomponent/loginstyled";
import {img} from './const'


const Login = () =>{
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

const formData = [
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Password',
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
          <Log>Inicia sesión en tu cuenta!</Log>
            <Container >
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
                           Inicia sesión
                           </Button>
                           </div>
                        </Form>
                        </FormRow>
                <h6 className="mt-5 p-5 text-center text-secondary ">No tienes cuenta ?<Link to="/register" style={{color:'red'}}>Registrate</Link> </h6>
            </Container>
            </Body>
        </>

)

}



export default Login;