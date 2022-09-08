import { useFormik } from 'formik'
import { useCurrentWidth, useMobile } from '../../hooks'
import {
  StackContainer,
  StyledWelcomeText,
  StyledTitle,
  StyledText,
  StyledFormContainer,
  StyledRegisterText,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledImage,
  StyledImageContainer,
  StyledBox,
  StyledErrorText,
} from './styles'
import { icons } from '../../assets'
import { initialValues, validationSchema } from './const'
import { loginAsync } from '../../store/slice/user'
import { useDispatch } from 'react-redux'

const Login = () => {
  const { currentWidth } = useCurrentWidth()
  const { ismobile } = useMobile(currentWidth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      dispatch(loginAsync(values))
      formik.resetForm()
      formik.setSubmitting(false)
    },
  })

  return (
    <StackContainer direction={ismobile === 'true' ? 'vertical' : 'horizontal'}>
      <StyledFormContainer ismobile={ismobile}>
        <StyledWelcomeText>Bienvenido</StyledWelcomeText>
        <StyledTitle>¡Registrate!</StyledTitle>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledBox>
            <StyledInput
              autoComplete='off'
              placeholder='Nombre'
              ismobile={ismobile}
              type='text'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <StyledErrorText>{formik.errors.name}</StyledErrorText>
            )}
          </StyledBox>
          <StyledBox>
            <StyledInput
              autoComplete='off'
              placeholder='Contraseña'
              ismobile={ismobile}
              type='password'
              name='surname'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname && (
              <StyledErrorText>{formik.errors.surname}</StyledErrorText>
            )}
          </StyledBox>
          <StyledBox>
            <StyledInput
              autoComplete='off'
              placeholder='Email'
              ismobile={ismobile}
              type='text'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <StyledErrorText>{formik.errors.email}</StyledErrorText>
            )}
          </StyledBox>
          <StyledBox>
            <StyledInput
              autoComplete='off'
              placeholder='Contraseña'
              ismobile={ismobile}
              type='password'
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <StyledErrorText>{formik.errors.password}</StyledErrorText>
            )}
          </StyledBox>
          <StyledButton
            type='submit'
            ismobile={ismobile}
            disabled={
              Object.entries(formik.errors).length > 0 || formik.isSubmitting
            }
          >
            Inicia sesión
          </StyledButton>
        </StyledForm>
        <StyledText>
          ¿Ya tienes una cuenta?
          <StyledRegisterText to='/login'>Inicia sesión</StyledRegisterText>
        </StyledText>
      </StyledFormContainer>
      {ismobile !== 'true' && (
        <StyledImageContainer ismobile={ismobile}>
          <StyledImage src={icons.login} alt='login screen' />
        </StyledImageContainer>
      )}
    </StackContainer>
  )
}

export default Login
