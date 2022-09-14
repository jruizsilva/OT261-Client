import StaffCardStyle from './styles';

const StaffCard = ({id,bg, name, role}) => {
  return (
    <StaffCardStyle key={id} bg={bg}>
      <p className="staff-name">{name}</p>
      <p className="staff-role">{role}</p>
    </StaffCardStyle>
  );
};

export default StaffCard;
