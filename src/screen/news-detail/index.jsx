import Slider from '../../Components/Slider/Slider';
import { icons } from '../../assets';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import HomeDetail from './styles';
import { Button } from 'react-bootstrap';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentNews = icons.news_imgs.find((i) => i.id === parseInt(id));
    console.log(currentNews)
    if (!currentNews) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <HomeDetail>
      <h1 className="text-center mt-4 mb-4">Novedades</h1>
      <Slider slides={icons.news_imgs.slice(0, 2)} />
      <div className="container mt-3 content-container">
        <h2 className="fw-semibold">Nombre de la novedad</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
          ullamcorper et bibendum at neque, tellus dolor nibh netus. Varius odio
          dictum blandit suscipit praesent purus ultrices. Cras suspendisse arcu
          hendrerit sed faucibus platea. Facilisis molestie quisque ultrices
          commodo nunc cursus sit nisi. Vivamus sed euismod rutrum placerat ut.
          Eu in facilisis vestibulum at. Morbi amet mattis sed elementum cursus.
          Interdum quisque sed viverra integer diam purus, tortor commodo. Duis
          sed vulputate suspendisse consectetur in mauris. Est volutpat quisque
          faucibus ut turpis sagittis massa, quam. Tincidunt in rutrum aenean
          neque, volutpat sit. Dictum diam malesuada condimentum ultrices amet
          gravida aliquam lobortis. Dolor enim facilisi semper odio at est
          bibendum porta augue. Lectus morbi tellus odio eu.
        </p>
        <Button as={Link} className="btn-rojo" to="/news">
          Ir al inicio
        </Button>
      </div>
    </HomeDetail>
  );
};

export default NewsDetail;
