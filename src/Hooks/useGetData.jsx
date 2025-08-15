import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useGetData(localidad) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!localidad) return;
    const fetchClima = async () => {
      setLoading(true);
      try {
        const resp = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${localidad}&appid=9d8030355e6d68d7c3e2fba8e54e6850
&units=metric&lang=es`
        );
        setData(resp.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, [localidad]);

  return {
    data,
    loading,
    error,
  };
}
