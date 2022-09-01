import React from 'react';
import {Button,Form,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Body, Welcome, Log,Img, Container,FormInputRow,FormLabel,FormInput,FormRow, ErrorMessage} from "./styledcomponent/loginstyled";
import {img, emailtest} from './const'
import { Formik,} from 'formik';

const Login = () =>{


const formData = [
		{ label: 'email', type: 'email' },{label: 'password',type: 'password',},]
return(

<>   
 <Body>
    
     <Img src={img.img}  alt="Imagen Bienvenida"/>
          <Welcome>Bienvenido</Welcome>
          <Log>Inicia sesión en tu cuenta!</Log>
            <Container >
                    <FormRow>
                        <Formik 
                        initialValues={{
                        email: '',
                        password: ''}}
                       
                       
                        validate={(valores) => {
                            let errors = {};
        
                            // Validacion nombre
                            if(!valores.password){
                                errors.password = 'Por favor ingresa un password'
                            }else if(valores.password.length < 6 ){
                                errors.password = 'La Contraseña debe tener al menos 6 caracteres.'
                            }
        
                            // Validacion correo
                            if(!valores.email){
                                errors.email = 'Por favor ingresa un correo electronico'
                            } else if( !emailtest.test(valores.email)){
                                errors.email = 'Ingrese un correo con formato valido.'
                            }
        
                            return errors;
                        }}
                        onSubmit={(valores) =>{
                           console.log(valores)
                     }}
                     
                     >


                      {(  {values, handleSubmit,handleChange,handleBlur ,errors, touched, } ) => ( 
                        <Form onSubmit={handleSubmit}>
                        {formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`${el.label.toLocaleLowerCase()}`}
										value={values[el.label]}
                                        id={el.label}
                                        name={el.label}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                           {touched[el.label] && errors[el.label] && <ErrorMessage >{errors[el.label]}</ErrorMessage >}
								</FormInputRow>
							))}
                            <div className="d-grid gap-2">
                           <Button variant="danger" size="lg" type="submit">
                           Inicia sesión
                           </Button>
                           </div>
                        </Form>
                        )}
                        </Formik>
                        </FormRow>
                <h6 className="mt-5 p-5 text-center text-secondary ">No tienes cuenta ?<Link to="/register" style={{color:'red'}}>Registrate</Link> </h6>
            </Container>
            </Body>
        </>

)

}



export default Login;