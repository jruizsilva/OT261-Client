import TestimonialStyle from "./styles";

const Testimonial = ({img, name, description}) =>  {
  return (
    <TestimonialStyle>
      <img src={img} alt={name} />
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-description">{description}</p>
    </TestimonialStyle>
  );
};

export default Testimonial;