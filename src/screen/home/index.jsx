import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';

const slides = [
  {
    id: 1,
    title: 'Slide 1',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 2,
    title: 'Slide 2',
    image:
      'https://images.unsplash.com/photo-1657299143333-4a56a5519651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 3,
    title: 'Slide 3',
    image:
      'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Slider slides={slides} classes={["w-50"]} />
      <Link to="/news">Go to News</Link>
    </div>
  );
};

export default Home;
