import TestimonialsListStyle from './styles';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialsList = ({ testimonials }) => {
  return (
    <TestimonialsListStyle>
      {testimonials.map(({ id, image }) => {
        return (
          <Testimonial
            key={id}
            img={image}
            name="Nombre y Apellido"
            description="testimonio testimonio"
          />
        );
      })}
    </TestimonialsListStyle>
  );
};

export default TestimonialsList;
