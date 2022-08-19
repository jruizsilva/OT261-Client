import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/news">Go to News</Link>
    </div>
  );
};

export default Home;
