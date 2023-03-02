import { useState, useEffect } from "react";

export const useAjax = (url) => {
  /*Estado para recibir usuarios desde una peticion ajax */
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

  /*Hacer peticion AJAX para recibir datos */
  const getData = async () => {
    /*Antes de la peticon llenamos el estado para que aparezca el cargando */
    setEstado({
      ...estado,
      cargando: true,
    });

    const peticion = await fetch(url);

    /*Convertir los datos a un objeto JSON usable */
    const datos = await peticion.json();

    /*llenamos el estado, y cambiamos el cargando a false */
    setEstado({
      datos: datos.data,
      cargando: false,
    });
  };

  /*Usamos use effect para que en la primera carga del componente se cargue una peticion */
  useEffect(() => {
    getData();
  }, [url]);

  return {
    datos:estado.datos,
    cargando:estado.cargando
  }
};
