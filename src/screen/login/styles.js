import styled from 'styled-components'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StackContainer = styled(Stack)`
  width: 100vw;
  height: calc(100vh - 6.25rem);
  overflow-y: ${({ ismobile }) => `${ismobile === 'true' ? 'auto' : 'hidden'}`};
  margin: 0 -0.75em;
  font-family: var(--font-poppins);
`

const StyledFormContainer = styled(Stack)`
  min-width: 20rem;
  max-width: 30rem;
  height: 420px;
  flex-grow: 0;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: ${({ ismobile }) => `${ismobile !== 'true' && '50%'}`};
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
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '1rem' : '1.5rem')};
  color: #616161;
  font-family: var(--font-roboto);
`
const StyledRegisterText = styled(Link)`
  margin: 0;
  margin-left: 0.2rem;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '1rem' : '1.5rem')};
  color: red;
  font-weight: 500;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: red;
    text-decoration: underline;
  }
`
const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

const StyledBox = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

const StyledInput = styled('input')`
  background-color: white;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  height: ${({ ismobile }) => (ismobile === 'true' ? '3rem' : '3.5rem')};
  padding: 16px;
  font-size: 16px;

  :focus {
    outline: none;
    box-shadow: 0px 0px 5px #007bff;
  }
`

const StyledErrorText = styled('p')`
  margin: 0;
  color: red;
  font-size: 0.875rem;
`

const StyledButton = styled('button')`
  background-color: red;
  width: 100%;
  font-weight: 600;
  height: ${({ ismobile }) => (ismobile === 'true' ? '3rem' : '3.5rem')};
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '1.125rem' : '1.5rem')};
  color: white;
  border-radius: 0.5rem;

  :disabled {
    opacity: 0.5;
  }
`

const StyledImageContainer = styled('div')`
  height: 100%;
  flex-basis: ${({ ismobile }) => `${ismobile !== 'true' && '50%'}`};
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
  StyledBox,
  StyledInput,
  StyledErrorText,
  StyledButton,
  StyledImageContainer,
  StyledImage,
}
