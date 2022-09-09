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
    <StackContainer
      direction={ismobile === 'true' ? 'vertical' : 'horizontal'}
      ismobile={ismobile}
    >
      <StyledFormContainer ismobile={ismobile}>
        <StyledWelcomeText>Bienvenido</StyledWelcomeText>
        <StyledTitle>Inicia sesión en tu cuenta!</StyledTitle>
        <StyledForm onSubmit={formik.handleSubmit}>
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
          No tienes una cuenta?
          <StyledRegisterText to='/register'>Registrate</StyledRegisterText>
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
