import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const EjemploComponent = () => {
  const [mostrar, setMostrar] = useState(false);

  /*Referenias para manipular los elementos */
  const caja = useRef();
  const boton = useRef();

  /*Se ejecuta antes de que se cargen los componentes del dom */
  useLayoutEffect(() => {
    console.log("useLayoutEffect : Componente cargado !!!");
  }, []);

  /*Se carga despues de que los componentes se hayan cargado */
  useEffect(() => {
    console.log("useEffect : Componente cargado !!!");
    if (caja.current == null) return;

    const { bottom } = boton.current.getBoundingClientRect();

    caja.current.style.top = ` ${bottom + 45}px`;
    
    caja.current.style.left = ` ${bottom + 45}px`;
  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      {/*Onclick va a coger el valor previo y coge otro valor */}
      <button ref={boton} onClick={() => setMostrar((prev) => !prev)}>
        Mostrar mensaje
      </button>
      {mostrar && (
        <div id="caja" ref={caja}>
          Hola Soy un mensaje {mostrar}
        </div>
      )}
    </div>
  );
};
