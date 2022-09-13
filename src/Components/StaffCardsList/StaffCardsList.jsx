import StaffCardsListStyles from './styles';
import StaffCard from '../../Components/StaffCard/StaffCard';

const StaffCardsList = ({staff_members}) => {
  return (
      <StaffCardsListStyles>
        {staff_members.map(({ image, id }) => {
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
