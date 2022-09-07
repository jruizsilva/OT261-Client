import styled from 'styled-components'
import { Stack } from 'react-bootstrap'

const StackContainer = styled(Stack)`
  width: 100vw;
  height: calc(100vh - 6.25rem);
  margin: 0 -0.75em;
  font-family: var(--font-poppins);
`

const StyledFormContainer = styled(Stack)`
  min-width: 20rem;
  max-width: 30rem;
  height: ${({ isMobile }) => (isMobile ? '420px' : '100%')};
  margin: auto;
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: ${({ isMobile }) => `${!isMobile && '50%'}`};
`

const StyledWelcomeText = styled('p')`
  color: #616161;
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  color: #2d3748;
`

const StyledTitle = styled('h2')`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  color: #1a202c;
  margin-bottom: 1rem;
`

const StyledText = styled('p')`
  margin: 0;
  margin-top: auto;
  text-align: center;
  font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
  color: #616161;
`
const StyledRegisterText = styled('span')`
  margin: 0;
  margin-left: 0.2rem;
  font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
  color: red;
  font-weight: 500;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const StyledForm = styled('form')``
const StyledInput = styled('input')`
  margin-bottom: 1.5rem;
  background-color: white;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  height: ${({ isMobile }) => (isMobile ? '3rem' : '3.5rem')};
  padding: 16px;
  font-size: 16px;

  :focus {
    outline: none;
    box-shadow: 0px 0px 5px #007bff;
  }
`
const StyledButton = styled('button')`
  background-color: red;
  width: 100%;
  font-weight: 600;
  height: ${({ isMobile }) => (isMobile ? '3rem' : '3.5rem')};
  font-size: ${({ isMobile }) => (isMobile ? '1.125rem' : '1.5rem')};
  color: white;
  border-radius: 0.5rem;
`

const StyledImageContainer = styled('div')`
  height: 100%;
  flex-basis: ${({ isMobile }) => `${!isMobile && '50%'}`};
`

const StyledImage = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export {
  StackContainer,
  StyledFormContainer,
  StyledWelcomeText,
  StyledTitle,
  StyledText,
  StyledRegisterText,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledImageContainer,
  StyledImage,
}
