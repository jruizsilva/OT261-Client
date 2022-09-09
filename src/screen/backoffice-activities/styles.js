import styled from 'styled-components'
import { Stack, Button, Nav } from 'react-bootstrap'

const StyledContainer = styled(Stack)`
  background-color: #edf2f7;
  min-height: calc(100vh - 6.25rem);
  margin: 0 -0.5rem;
`

const TitleGroup = styled.div`
  height: 3rem;
  margin-bottom: 0.5em;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  display: flex;
`
const ButtonItem = styled(Button)`
  height: 100%;
  width: 100%;
  max-width: 10rem;
  margin-left: auto;
  @media screen and (max-width: 48rem) {
    margin: auto;
  }
  cursor: pointer;
`
const ActivitiyTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
const StyledNav = styled(Nav)`
  @media screen and (max-width: 48rem) {
    justify-content: center;
  }
`
export { StyledContainer, TitleGroup, ButtonItem, ActivitiyTitle, StyledNav }
