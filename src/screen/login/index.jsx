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
  StyledErrorText
} from './styles'
import { icons } from '../../assets'
import { initialValues, validationSchema } from './const'
import { loginAsync } from '../../store/slice/user'
import { useDispatch } from 'react-redux'
import { loginFields } from './const'

const Login = () => {
  const { currentWidth } = useCurrentWidth()
  const { ismobile } = useMobile(currentWidth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      dispatch(loginAsync(values))
    }
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
          {loginFields.map(({ id, type, name, placeholder }) => (
            <StyledBox key={id}>
              <StyledInput
                name={name}
                placeholder={placeholder}
                ismobile={ismobile}
                autoComplete='off'
                type={type ? type : 'text'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
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
