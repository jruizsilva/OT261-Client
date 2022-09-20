import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Debe tener mínimo 2 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .min(2, 'Debe tener mínimo 2 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('El apellido es requerido'),
  email: Yup.string()
    .email('El ingresado email no es válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'Debe tener mínimo 6 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('La contraseña es requerida')
})
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const registerFields = [
  { name: 'firstName', placeholder: 'Nombre', id: 1 },
  { name: 'lastName', placeholder: 'Apellido', id: 2 },
  { name: 'email', placeholder: 'Email', id: 3 },
  { name: 'password', placeholder: 'Contraseña', id: 4, type: 'password' }
]

export { validationSchema, initialValues, registerFields }
