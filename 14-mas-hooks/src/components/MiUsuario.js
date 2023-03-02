import React, { useEffect, useState } from "react";
import { useAjax } from "../hooks/useAjax";

export const MiUsuario = () => {
  /*Estado de url */
  const [url, setUrl] = useState("https://reqres.in/api/users/1");

  /*desestruturamos los datos que vienen desde useAjax */
  const { datos, cargando } = useAjax(url);

  /*Obtener el valor del input */
  const getId = (e) => {
    let id = parseInt(e.target.value);
    /*Url para la peticion */
    setUrl("https://reqres.in/api/users/" + id);
  };

  return (
    <div>
      <h1>Mi usuario</h1>
      <p>Datos del usuario</p>
      <p>{cargando ? "Cargando...." : ""}</p>
      <p>
        {datos?.first_name} {datos?.last_name}
      </p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};
