import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import useGetData from "../Hooks/useGetData";
import Loading from "./Loading";
import CardsWeather from "./CardsWeather";
import Alert from "@mui/material/Alert";

export default function WeatherApp() {
  const [searchLocalidad, setSearchLocalidad] = useState("");
  const { data, loading, error } = useGetData(searchLocalidad);
  const initialValues = {
    localidad: "",
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const validationSchema = Yup.object({
    localidad: Yup.string().required("la ciudad es obligatoria"),
  });

  const handleSubmit = (values) => {
    setSearchLocalidad(values.localidad.toLowerCase().trim());
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="containerGral">
      <h2 className="Titulo">Aplicación del Clima</h2>
      <form className="buscar" onSubmit={formik.handleSubmit}>
        <TextField
          label="Localidad"
          name="localidad"
          value={formik.values.localidad}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.localidad && Boolean(formik.errors.localidad)}
          helperText={
            formik.touched.localidad && formik.errors.localidad
              ? formik.errors.localidad
              : "que clima estas buscando"
          }
          sx={{
            width: "70%",
          }}
          color="white"
        />
        <Button
          type="submit"
          sx={{
            border: "1px solid blue",
            height: "55px",
            background: "#4DA6FF",
            width: "20%",
            color: "#FFFFFF",
            borderColor: "lightgray",
            "&:hover": {
              background: "#1F4E79", // azul más oscuro
              color: "#c7b979ff", // por ejemplo, dorado para contraste
              cursor: "pointer", // mano al pasar
              borderColor: "black",
            },
          }}
        >
          Buscar
        </Button>
      </form>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : data ? (
        <CardsWeather
          localidad={data.name}
          temperatura={data.main.temp}
          icono={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          maxima={data.main.temp_max}
          minima={data.main.temp_min}
          descripcion={data.weather[0].description}
        ></CardsWeather>
      ) : null}
    </div>
  );
}
