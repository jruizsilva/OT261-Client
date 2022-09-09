import styled from 'styled-components'

const StyledContactContainer = styled('div')`
  font-family: var(--font-poppins);
  text-align: center;
  display: flex;
  max-width: 733px;
  flex-direction: column;
  row-gap: 3rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  margin-left: 5%;
  @media screen and (min-width: 768px) {
    padding-top: 58px;
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 142px;
  }
`
const StyledDonationContainer = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
  }
`
const StyledWrapper = styled('div')``

const StyledDonationTitle = styled('h3')`
  font-size: 2rem;
  margin: 0;
`

const StyledContactTitle = styled('h3')`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 32px;
`
const StyledButton = styled('button')`
  background-color: ${({ isSubmit }) => (isSubmit ? '#0038ff' : 'red')};
  height: 3rem;
  width: ${({ isSubmit }) => (isSubmit ? '295px' : '211px')};
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 1.25rem;
  font-weight: 600;
  margin: auto;
  margin-top: ${({ isSubmit }) => (isSubmit ? '24px' : '0')};
  font-size: 24px;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-top: ${({ isSubmit }) => (isSubmit ? '24px' : '0')};
    height: 68px;
    font-size: 32px;
  }
`
const StyledHomeButton = styled('button')`
  background-color: white;
  height: 3rem;
  width: 200px;
  border: 1px solid black;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  color: black;
  border-radius: 1.25rem;
  font-weight: 600;
  margin: auto;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    margin: 0;
    font-size: 32px;
    height: 68px;
  }
`

const StyledFormContainer = styled('div')``
const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`
const StyledBox = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`
const StyledInput = styled('input')`
  background-color: white;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  height: 3rem;
  padding: 16px;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    height: 70px;
  }
  ::placeholder {
    color: #989898;
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 5px #007bff;
  }
`
const StyledErrorText = styled('p')`
  margin: 0;
  color: red;
  text-align: left;
  font-size: 0.875rem;
`

export {
  StyledContactContainer,
  StyledDonationContainer,
  StyledWrapper,
  StyledButton,
  StyledHomeButton,
  StyledFormContainer,
  StyledForm,
  StyledBox,
  StyledInput,
  StyledErrorText,
  StyledDonationTitle,
  StyledContactTitle,
}
