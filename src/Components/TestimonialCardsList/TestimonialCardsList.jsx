import TestimonialCardsListStyle from './styles';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialCardsList = ({ testimonials }) => {
  return (
    <TestimonialCardsListStyle>
      {testimonials.map(({ id, image }) => {
        return (
          <TestimonialCard
            key={id}
            img={image}
            name="Nombre y Apellido"
            description="testimonio testimonio"
          />
        );
      })}
    </TestimonialCardsListStyle>
  );
};

export default TestimonialCardsList;
