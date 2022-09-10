import StaffCardsListStyles from './styles';
import { useCurrentWidth, useIsUpperBreakpoint } from '../../hooks';
import StaffCard from '../../Components/StaffCard/StaffCard';

const StaffCardsList = ({staff_members}) => {
  const { currentWidth } = useCurrentWidth();
  const [isUpper768px] = useIsUpperBreakpoint(currentWidth, 768);

  return (
      <StaffCardsListStyles isUpper768px={isUpper768px}>
        {staff_members.map(({ image, id }) => {
          if (id === 1) return null;
          return (
            <StaffCard
              key={id}
              bg={image}
              name="Julian Fernandez"
              role="Ceo / CoFounder"
            />
          );
        })}
      </StaffCardsListStyles>
  );
};

export default StaffCardsList;
