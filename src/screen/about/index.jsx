import {
  StyledAboutContainer,
  StyledItem,
  StyledLeftWrapper,
  StyledList,
  StyledMemberButton,
  StyledMemberContainer,
  StyledMemberDescription,
  StyledMemberDesktopImage,
  StyledMemberMobileImage,
  StyledMemberRole,
  StyledMemberTitle,
  StyledName,
  StyledRightWrapper,
  StyledRole,
  StyledTitle,
} from './styles'
import { icons } from '../../assets'
import { useCurrentWidth, useIsUpperBreakpoint } from '../../hooks'

const About = () => {
  const { currentWidth } = useCurrentWidth()
  const [isUpper500px] = useIsUpperBreakpoint(currentWidth, 500)

  console.log(isUpper500px)

  return (
    <StyledAboutContainer gap={4}>
      <StyledTitle>¡Nuestro staff!</StyledTitle>
      <StyledMemberContainer>
        <StyledLeftWrapper>
          <StyledMemberTitle>Roberto Martinez</StyledMemberTitle>
          <StyledMemberMobileImage src={icons.staff_members[0].image} />
          <StyledMemberRole>Rol que desempeña</StyledMemberRole>
          <StyledMemberDescription>
            Texto con descripcion de la persona y rol que desempeñaTexto con
            descripcion de la persona y rol que desempeñaTexto con descripcion
            de la persona y rol que desempeñaTexto con descripcion de la persona
            y rol que desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que desempeña
          </StyledMemberDescription>
          <StyledMemberButton>¡Quiero ser parte!</StyledMemberButton>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledMemberDesktopImage src={icons.staff_members[0].image} />
        </StyledRightWrapper>
      </StyledMemberContainer>
      <StyledList>
        {icons.staff_members.map(({ image, id }) => {
          if (id === 1) return null
          return (
            <StyledItem key={id} bg={image}>
              <StyledName>Julian Fernandez</StyledName>
              <StyledRole>Ceo / CoFounder</StyledRole>
            </StyledItem>
          )
        })}
      </StyledList>
    </StyledAboutContainer>
  )
}

export default About
