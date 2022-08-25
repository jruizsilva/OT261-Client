import { Route, Routes } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
<<<<<<< HEAD
import Backoffice from '../screen/backoffice';
import Login from '../Components/login/Login';
import Registration from '../Components/Registration/Registration';
const Routing = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/backoffice' element={<Backoffice />} />
        <Route path='/login' element={<Login />} />v
        <Route path='/register' element={< Registration />} />
      </Routes>
=======
import { BackofficeRoutes } from './BackofficeRoutes';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/backoffice/*' element={<BackofficeRoutes />} />
    </Routes>
>>>>>>> 45a8a38f2bd29bc65f277178703e44069907b6c4
  );
};

export default Routing;
