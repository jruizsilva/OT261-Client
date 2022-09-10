import {
  StyledAboutContainer,
  StyledLeftWrapper,
  StyledList,
  StyledMemberButton,
  StyledMemberContainer,
  StyledMemberDescription,
  StyledMemberDesktopImage,
  StyledMemberMobileImage,
  StyledMemberRole,
  StyledMemberTitle,
  StyledRightWrapper,
  StyledTitle,
} from './styles'
import { icons } from '../../assets'
import { useCurrentWidth, useIsUpperBreakpoint } from '../../hooks'
import StaffCard from '../../Components/StaffCard/StaffCard'

const About = () => {
  const { currentWidth } = useCurrentWidth()
  const [isUpper768px] = useIsUpperBreakpoint(currentWidth, 768)
  const [isUpper1024px] = useIsUpperBreakpoint(currentWidth, 1024)

  return (
    <StyledAboutContainer isUpper1024px={isUpper1024px} gap={5}>
      <StyledTitle isUpper768px={isUpper768px} isUpper1024px={isUpper1024px}>
        ¡Nuestro staff!
      </StyledTitle>
      <StyledMemberContainer
        gap={5}
        direction={isUpper768px ? 'horizontal' : 'vertical'}
        isUpper768px={isUpper768px}
      >
        <StyledLeftWrapper isUpper768px={isUpper768px}>
          <StyledMemberTitle
            isUpper768px={isUpper768px}
            isUpper1024px={isUpper1024px}
          >
            Roberto Martinez
          </StyledMemberTitle>
          {!isUpper768px && (
            <StyledMemberMobileImage src={icons.staff_members[0].image} />
          )}

          <StyledMemberRole isUpper1024px={isUpper1024px}>
            Rol que desempeña
          </StyledMemberRole>
          <StyledMemberDescription isUpper768px={isUpper768px}>
            Texto con descripcion de la persona y rol que desempeñaTexto con
            descripcion de la persona y rol que desempeñaTexto con descripcion
            de la persona y rol que desempeñaTexto con descripcion de la persona
            y rol que desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que
            desempeñaTexto con descripcion de la persona y rol que desempeña
          </StyledMemberDescription>
          <StyledMemberButton
            isUpper768px={isUpper768px}
            isUpper1024px={isUpper1024px}
          >
            ¡Quiero ser parte!
          </StyledMemberButton>
        </StyledLeftWrapper>
        {isUpper768px && (
          <StyledRightWrapper>
            <StyledMemberDesktopImage src={icons.staff_members[0].image} />
          </StyledRightWrapper>
        )}
      </StyledMemberContainer>
      <StyledList isUpper768px={isUpper768px}>
        {icons.staff_members.map(({ image, id }) => {
          if (id === 1) return null
          return (
            <StaffCard key={id} bg={image} name="Julian Fernandez" role="Ceo / CoFounder"/>
          )
        })}
      </StyledList>
    </StyledAboutContainer>
  )
}

export default About
