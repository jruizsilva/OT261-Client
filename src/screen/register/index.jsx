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
import { registerAsync } from '../../store/slice/user'
import { useDispatch } from 'react-redux'
import { registerFields } from './const'

const Login = () => {
  const { currentWidth } = useCurrentWidth()
  const { ismobile } = useMobile(currentWidth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      dispatch(registerAsync(values))
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
        <StyledTitle>¡Registrate!</StyledTitle>
        <StyledForm onSubmit={formik.handleSubmit}>
          {registerFields.map(({ name, placeholder }) => (
            <StyledBox>
              <StyledInput
                name={name}
                placeholder={placeholder}
                autoComplete='off'
                ismobile={ismobile}
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched[name] && formik.errors[name] && (
                <StyledErrorText>{formik.errors[name]}</StyledErrorText>
              )}
            </StyledBox>
          ))}
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