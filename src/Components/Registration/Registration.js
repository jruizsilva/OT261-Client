import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  Body,
  Welcome,
  Log,
  Container,
  FormInputRow,
  FormLabel,
  FormInput,
  FormRow,
} from '../login/styledcomponent/loginstyled';
import { Img } from './styledregister/registrerstyled';
import { img } from '../login/const';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Nombre es requerido';
  }
  if (!values.lastName) {
    errors.lastName = 'Apellido es requerido';
  }
  if (!values.email) {
    errors.email = 'Email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'El email no es valido';
  }
  if (!values.password) {
    errors.password = 'Contraseña es requerido';
  } else if (values.password.trim().length < 6) {
    errors.password = 'La contraseña debe tener mas de 6 caracteres';
  }
  return errors;
};

const Registration = () => {
  const onSubmit = async (values) => {
    const registerURL = process.env.REACT_APP_BACKEND_URL + '/auth/register';
    try {
      const response = await fetch(registerURL, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      console.log(response);
    } catch (err) {
			console.log(err.message);
		}
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const formData = [
    {
      label: 'Nombre',
      id: 'firstName',
      value: formik.values.firstName,
      onChange: formik.handleChange,
      type: 'text',
    },
    {
      label: 'Apellido',
      id: 'lastName',
      value: formik.values.lastName,
      onChange: formik.handleChange,
      type: 'text',
    },
    {
      label: 'Email',
      id: 'email',
      value: formik.values.email,
      onChange: formik.handleChange,
      type: 'email',
    },
    {
      label: 'Contraseña',
      id: 'password',
      value: formik.values.password,
      onChange: formik.handleChange,
      type: 'password',
    },
  ];

  return (
    <Body>
      <Img src={img.img} alt="Imagen Bienvenida" />
      <Welcome>Bienvenido</Welcome>
      <Log>¡Regístrate!</Log>
      <Container>
        <FormRow>
          <Form onSubmit={formik.handleSubmit}>
            {formData.map((el, index) => (
              <FormInputRow key={el.id}>
                <FormLabel>{el.label}</FormLabel>
                <FormInput
                  type={el.type}
                  placeholder={`${el.label.toLocaleLowerCase()}`}
                  value={el.value}
                  onChange={el.onChange}
                  id={el.id}
                />
                {formik.errors[el.id] ? (
                  <div className="text-danger">{formik.errors[el.id]}</div>
                ) : null}
              </FormInputRow>
            ))}
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg" type="submit">
                Registrarse
              </Button>
            </div>
          </Form>
        </FormRow>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          Ya tienes cuenta ?{' '}
          <Link to="/login" style={{ color: 'red' }}>
            Inicia sesión
          </Link>
        </h6>
      </Container>
    </Body>
  );
};

export default Registration;
