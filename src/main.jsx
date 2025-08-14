import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherApp from "./Componentes/WeatherApp";
import "../src/Styles/EstiloGral.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherApp></WeatherApp>
  </StrictMode>
);
