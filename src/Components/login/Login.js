import React from 'react';
import {Button,Form,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Body, Welcome, Log,Img, Container,FormInputRow,FormLabel,FormInput,FormRow, ErrorMessage} from "./styledcomponent/loginstyled";
import {img, emailtest} from './const'
import { Formik,} from 'formik';

const Login = () =>{


const formData = [
		{ label: 'email', type: 'email' },{label: 'password',type: 'password',},]

const formvalidate = (valores) => {
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
}


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
                      validate={(valores) => formvalidate(valores)}
                      onSubmit={(valores) =>{
                        console.log(valores)
                     }}
                     
                     >


                      {(  {values, handleSubmit,handleChange,handleBlur ,errors, touched, } ) => ( 
                        <Form onSubmit={handleSubmit}>
                        {formData.map((data, id) => (
								<FormInputRow key={id}>
									<FormLabel>{data.label}</FormLabel>
									<FormInput
										type={data.type}
										placeholder={`${data.label.toLocaleLowerCase()}`}
										value={values[data.label]}
                                        id={data.label}
                                        name={data.label}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                           {touched[data.label] && errors[data.label] && <ErrorMessage >{errors[data.label]}</ErrorMessage >}
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