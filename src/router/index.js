import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
import Backoffice from '../screen/backoffice';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/backoffice' element={<Backoffice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
