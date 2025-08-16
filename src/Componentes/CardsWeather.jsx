import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardsWeather({
  localidad,
  temperatura,
  icono,
  maxima,
  minima,
  descripcion,
}) {
  return (
    <Card
      sx={{
        width: "90%",
        backgroundColor: "#4DA6FF",
        display: "flex", // 👈 Esto es clave
        flexDirection: "row", // Ahora sí funciona
        alignItems: "center", // Opcional: alinear verticalmente
        alignSelf: "center",
        justifyContent: "space-evenly", // Opcional: espacio entre hijos
        border: "4px solid #1F4E79",
        marginTop: "40px",
        color: "#333333",
      }}
    >
      <div style={{ width: "50%" }}>
        <CardMedia
          sx={{
            height: 140, // alto
            width: 200, // ancho
            objectFit: "contain", // o "cover" según quieras
            margin: "0 auto",
          }}
          image={icono}
          title={descripcion}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h4" component="div">
            {localidad}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            {parseInt(temperatura)}°C
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {descripcion}
          </Typography>
        </CardContent>
      </div>
      <div style={{ width: "50%" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Maximo
          </Typography>
          <Typography variant="h5" sx={{}}>
            {maxima}°C
          </Typography>
        </CardContent>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Minimo
          </Typography>
          <Typography variant="h5" sx={{}}>
            {minima}°C
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
