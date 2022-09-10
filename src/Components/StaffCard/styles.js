import styled from "styled-components";

const StaffCardStyle = styled.li`
  width: ${({ isUpper768px }) => (isUpper768px ? '13.25rem' : '11.25rem')};
  height: ${({ isUpper768px }) => (isUpper768px ? '14.625rem' : '12.5rem')};
  background-color: #ccc;
  border-radius: 1.25rem;
  padding: 1.125rem 0.75rem;
  background-image: url(${({ bg }) => bg});
  display: flex;
  flex-direction: column;

  p.staff-name {
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
  }

  p.staff-role {
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: -0.015em;
    font-weight: 600;
    font-family: var(--font-mulish);
    margin: 0;
    color: white;
    text-align: center;
  }
`;

export default StaffCardStyle;