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

const Login = () => {
  const { currentWidth } = useCurrentWidth()
  const { ismobile } = useMobile(currentWidth)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values)
      formik.resetForm()
      formik.setSubmitting(false)
    },
  })

  return (
    <StackContainer direction={ismobile === 'true' ? 'vertical' : 'horizontal'}>
      <StyledFormContainer ismobile={ismobile}>
        <StyledWelcomeText>Bienvenido</StyledWelcomeText>
        <StyledTitle>Inicia sesión en tu cuenta!</StyledTitle>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledBox>
            <StyledInput
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
