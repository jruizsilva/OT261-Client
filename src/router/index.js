import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
import SlidesForm from '../Components/Slides/SlidesForm';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/formslide" element={<SlidesForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
