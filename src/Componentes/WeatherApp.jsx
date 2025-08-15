import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import useGetData from "../Hooks/useGetData";

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
      <h1 className="Titulo">Aplicaicon del Clima</h1>
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
              : "que clima estas usando"
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
            height: "50px",
            background: "lightblue",
          }}
        >
          Buscar
        </Button>
      </form>
    </div>
  );
}
