import StaffCardStyle from './styles';
import { useCurrentWidth, useIsUpperBreakpoint } from '../../hooks';

const StaffCard = ({id,bg, name, role}) => {
  const { currentWidth } = useCurrentWidth();
  const [isUpper768px] = useIsUpperBreakpoint(currentWidth, 768);

  return (
    <StaffCardStyle isUpper768px={isUpper768px} key={id} bg={bg}>
      <p className="staff-name">{name}</p>
      <p className="staff-role">{role}</p>
    </StaffCardStyle>
  );
};

export default StaffCard;
