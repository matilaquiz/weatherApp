import React from "react";
import { Button, TextField } from "@mui/material";

export default function WeatherApp() {
  return (
    <div className="containerGral">
      <h1 className="Titulo">Aplicaicon del Clima</h1>
      <div className="buscar">
        <TextField
          label="Localidad"
          sx={{
            width: "70%",
          }}
          color="white"
          helperText="Que clima estas buscando"
        />
        <Button
          sx={{
            border: "1px solid blue",
            height: "50px",
            background: "lightblue",
          }}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}
