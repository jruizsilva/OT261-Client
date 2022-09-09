import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Debe tener mínimo 2 caracteres')
    .max(64, 'Debe tener máximo 64 caracteres')
    .required('El nombre completo es requerido'),
  email: Yup.string()
    .email('El ingresado email no es válido')
    .required('El email es requerido'),
  description: Yup.string()
    .min(6, 'Debe tener mínimo 6 caracteres')
    .max(254, 'Debe tener máximo 254 caracteres')
    .required('La contraseña es requerida'),
})

const initialValues = {
  fullname: '',
  email: '',
  description: '',
}

const contactFields = [
  { name: 'fullname', placeholder: 'Nombre y Apellido' },
  { name: 'email', placeholder: 'Email' },
  { name: 'description', placeholder: 'Escribe tu consulta...' },
]

export { validationSchema, initialValues, contactFields }
