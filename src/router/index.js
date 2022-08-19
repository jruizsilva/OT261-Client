import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';

import Home from '../screen/home';
import News from '../screen/news';

const Routing = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
