import { Route, Routes } from 'react-router-dom';

import Home from '../screen/home';
import News from '../screen/news';
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
  )
};

export default Routing;
