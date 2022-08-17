import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/news">Go to News</Link>
    </div>
  );
};

export default Landing;
