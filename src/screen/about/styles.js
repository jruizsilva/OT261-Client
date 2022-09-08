import styled from 'styled-components'
import { Stack } from 'react-bootstrap'

const StyledAboutContainer = styled(Stack)`
  margin: 0 -0.75rem;
  font-family: var(--font-poppins);
`

const StyledTitle = styled('h2')`
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem; // desktop 3rem
  margin: 0;
  margin-top: 1.5rem;
`

const StyledMemberContainer = styled(Stack)`
  padding: 0 0.75rem;
  row-gap: 0.5rem;
  max-width: 25rem;
  margin: auto;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    max-width: 81rem;
  }
`

const StyledLeftWrapper = styled(Stack)`
  padding: 0 0.75rem;
  row-gap: 0.5rem;
  max-width: 25rem;
  margin: auto;
  margin-bottom: 1.5rem;
`

const StyledRightWrapper = styled('div')`
  padding: 0 0.75rem;
  row-gap: 0.5rem;
  max-width: 25rem;
  margin: auto;
  margin-bottom: 1.5rem;
`

const StyledMemberTitle = styled('h3')`
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem; // desktop 2.5rem
  margin: 0;
`

const StyledMemberRole = styled('h4')`
  font-size: 1.8rem; // desktop 2.5rem
  margin: 0;
`

const StyledMemberDescription = styled('p')`
  font-size: 1 25rem; // desktop 2.5rem
  margin: 0;
  font-family: var(--font-mulish);
`

const StyledMemberButton = styled('button')`
  font-weight: 600;
  font-size: 1.5rem; // 2rem desktop
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  background-color: red;
  color: white;
  width: 18.75rem;
  height: 3.5rem; // 4.25rem desktop
  margin-top: 1.5rem;
`

const StyledList = styled('ul')`
  max-width: 25rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
  margin-bottom: 4rem;
`

const StyledItem = styled('li')`
  width: 11.25rem;
  height: 12.5rem;
  background-color: #ccc;
  border-radius: 1.25rem;
  padding: 1.125rem 0.75rem;
  background-image: url(${({ bg }) => bg});
  display: flex;
  flex-direction: column;
`

const StyledName = styled('p')`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: var(--font-mulish);
  text-transform: capitalize;
  margin: 0;
  color: white;
  text-align: center;
  margin-top: auto;
  letter-spacing: -0.015em;
`

const StyledRole = styled('p')`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.015em;
  font-weight: 600;
  font-family: var(--font-mulish);
  margin: 0;
  color: white;
  text-align: center;
`

const StyledMemberMobileImage = styled('img')`
  width: 12.5rem;
  height: 12.5rem;
  margin: auto;
  border-radius: 1rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const StyledMemberDesktopImage = styled('img')``

export {
  StyledAboutContainer,
  StyledTitle,
  StyledMemberContainer,
  StyledMemberTitle,
  StyledMemberRole,
  StyledMemberDescription,
  StyledMemberButton,
  StyledMemberMobileImage,
  StyledMemberDesktopImage,
  StyledList,
  StyledItem,
  StyledName,
  StyledRole,
  StyledLeftWrapper,
  StyledRightWrapper,
}
