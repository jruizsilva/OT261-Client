import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('El ingresado email no es válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'Debe tener mínimo 6 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('La contraseña es requerida')
})
const initialValues = {
  email: '',
  password: ''
}
const loginFields = [
  { name: 'email', placeholder: 'Email', id: 1 },
  { name: 'password', placeholder: 'Password', id: 2 }
]

export { validationSchema, initialValues, loginFields }
