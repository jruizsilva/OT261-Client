import NewsCardsListStyle from './styles';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardsList = ({ testimonials }) => {
  return (
    <NewsCardsListStyle>
      {testimonials.map(({ id, image }) => {
        return <NewsCard key={id} img={image} text="news placeholder" />;
      })}
    </NewsCardsListStyle>
  );
};

export default NewsCardsList;
