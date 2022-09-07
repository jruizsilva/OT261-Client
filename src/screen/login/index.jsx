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
} from './styles'
import { icons } from '../../assets'

const Login = () => {
  const { currentWidth } = useCurrentWidth()
  console.log(currentWidth)
  const { isMobile } = useMobile(currentWidth)
  console.log(isMobile)
  return (
    <StackContainer direction={isMobile ? 'vertical' : 'horizontal'}>
      <StyledFormContainer isMobile={isMobile}>
        <StyledWelcomeText>Bienvenido</StyledWelcomeText>
        <StyledTitle>Inicia sesión en tu cuenta!</StyledTitle>
        <StyledForm>
          <StyledInput placeholder='Email' isMobile={isMobile} />
          <StyledInput placeholder='Contraseña' isMobile={isMobile} />
          <StyledButton isMobile={isMobile} onClick={e => e.preventDefault()}>
            Inicia sesión
          </StyledButton>
        </StyledForm>
        <StyledText>
          No tienes una cuenta?
          <StyledRegisterText>Registrate</StyledRegisterText>
        </StyledText>
      </StyledFormContainer>
      {!isMobile && (
        <StyledImageContainer isMobile={isMobile}>
          <StyledImage src={icons.login} alt='login screen' />
        </StyledImageContainer>
      )}
    </StackContainer>
  )
}

export default Login
