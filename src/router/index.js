import { Route, Routes } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
import { BackofficeRoutes } from './BackofficeRoutes';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/backoffice/*' element={<BackofficeRoutes />} />
    </Routes>
  );
};

export default Routing;
