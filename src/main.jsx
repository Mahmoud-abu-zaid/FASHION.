import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
{
  /*import App from "./App.jsx";*/
}
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/layouts/Header.jsx";
import Catalogue from "./components/pages/CATALOGUE.jsx";
import App from "./App.jsx";
import Fashion from "./components/pages/Fashion.jsx";
import Favourite from "./components/pages/Favourite.jsx";
import Lifestyle from "./components/pages/Lifestyle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Lifestyle" element={<Lifestyle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
