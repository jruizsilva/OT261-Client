import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/news" element={<h1>News</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;