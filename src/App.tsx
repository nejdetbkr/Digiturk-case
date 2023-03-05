import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Categorys from "./pages/categorys";
import Film from "./pages/film";
import Page404 from "./pages/404";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorys" element={<Categorys />} />
      <Route path="/film/:slug/:id" element={<Film />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
