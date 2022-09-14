import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Debe tener mínimo 2 caracteres')
    .max(16, 'Debe tener máximo 16 caracteres')
    .required('El nombre es requerido'),
  surname: Yup.string()
    .min(6, 'Debe tener mínimo 2 caracteres')
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
  name: '',
  surname: '',
  email: '',
  password: ''
}
const registerFields = [
  { name: 'name', placeholder: 'Nombre', id: 1 },
  { name: 'surname', placeholder: 'Apellido', id: 2 },
  { name: 'email', placeholder: 'Email', id: 3 },
  { name: 'password', placeholder: 'Contraseña', id: 4 }
]

export { validationSchema, initialValues, registerFields }
