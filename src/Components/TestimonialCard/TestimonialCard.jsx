import TestimonialCardStyle from "./styles";

const TestimonialCard = ({img, name, description}) =>  {
  return (
    <TestimonialCardStyle>
      <img src={img} alt={name} />
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-description">{description}</p>
    </TestimonialCardStyle>
  );
};

export default TestimonialCard;