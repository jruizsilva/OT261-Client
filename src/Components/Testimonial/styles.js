import styled from "styled-components";

const TestimonialStyle = styled.div`
  @media screen and (min-width: 768px) {
    width: 13.25rem;
    height: 14.625rem;
  }
  width: 11.25rem;
  height: 12.5rem;

  background-color: #fdffa4;
  border-radius: 1.25rem;
  padding: 1.125rem 0.75rem;
  display: flex;
  flex-direction: column;

  img {
    width: 35%;
  }

  .testimonial-name {
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 5px
  }
`;

export default TestimonialStyle;