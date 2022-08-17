import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Landing, News } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
