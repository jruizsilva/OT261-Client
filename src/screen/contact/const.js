import * as yup from 'yup'

const validationSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  description: yup.string().required(),
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
