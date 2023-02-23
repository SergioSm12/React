import React, { useCallback, useEffect, useRef, useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);
  //uso del useref
  //const gestor = useRef();

  /*Usamos use Efect para evitar quel console log se ejecute cada que se llama el componente */
  useEffect(() => {
    console.log("Se ha renderizado vista gestion!!");
    /*Cada que se cambie el estado de nombre y pagina se ejecutara el console.log*/
  }, [nombre, pagina]);

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  {/*Uso de useCallback para que cuando el componente empleado se ha alteareado este no se ejecute solo cuando inicie el componente gestion*/}

  const mostrarMensaje = useCallback(() => {
    console.log(
      "Hola que tal soy un mensaje desde el componente de Empleados !!"
    );
  }, [pagina]);
  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      {/*Si uso useref se debe de agregar prop ref={gestor} */}
      <input
        type="text"
        onChange={asignarGestor}
        placeholder="Introduce nombre gestor"
      />
      <h2>Listado de empleados:</h2>
      <p>
        Los usarios son gestionados por {nombre} vienen de jsonplaceholder...
      </p>

      <button
        onClick={() => {
          setPagina(1);
        }}
      >
        Pagina 1
      </button>
      <button
        onClick={() => {
          setPagina(2);
        }}
      >
        Pagina 2
      </button>
      <Empleados page={pagina} mensaje={mostrarMensaje} />
    </div>
  );
};
