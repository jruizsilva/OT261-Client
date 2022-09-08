import {
  StyledAboutContainer,
  StyledItem,
  StyledList,
  StyledMemberButton,
  StyledMemberContainer,
  StyledMemberDescription,
  StyledMemberMobileImage,
  StyledMemberRole,
  StyledMemberTitle,
  StyledName,
  StyledRole,
  StyledTitle,
} from './styles'
import { icons } from '../../assets'

const About = () => {
  return (
    <StyledAboutContainer gap={4}>
      <StyledTitle>¡Nuestro staff!</StyledTitle>
      <StyledMemberContainer>
        <StyledMemberTitle>Roberto Martinez</StyledMemberTitle>
        <StyledMemberMobileImage src={icons.staff_members[0].image} />
        <StyledMemberRole>Rol que desempeña</StyledMemberRole>
        <StyledMemberDescription>
          Texto con descripcion de la persona y rol que desempeñaTexto con
          descripcion de la persona y rol que desempeñaTexto con descripcion de
          la persona y rol que desempeñaTexto con descripcion de la persona y
          rol que desempeñaTexto con descripcion de la persona y rol que
          desempeñaTexto con descripcion de la persona y rol que desempeñaTexto
          con descripcion de la persona y rol que desempeñaTexto con descripcion
          de la persona y rol que desempeña
        </StyledMemberDescription>
        <StyledMemberButton>¡Quiero ser parte!</StyledMemberButton>
      </StyledMemberContainer>
      <StyledList>
        {icons.staff_members.map(({ image, id }) => {
          if (id === 1) return null
          return (
            <StyledItem bg={image}>
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
