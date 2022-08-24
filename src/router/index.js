import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
import RoutesAnimationLayout from '../Components/RoutesAnimationLayout';
import { BackofficeRoutes } from './BackofficeRoutes';

const Routing = () => {
  const location = useLocation();
  return (
    <RoutesAnimationLayout locationKey={location.key}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/backoffice/*' element={<BackofficeRoutes />} />
      </Routes>
    </RoutesAnimationLayout>
  );
};

export default Routing;
