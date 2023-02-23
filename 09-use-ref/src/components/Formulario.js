import React, { useRef } from "react";

export const Formulario = () => {
  const nombreValue = useRef();
  const apellidoValue = useRef();
  const emailValue = useRef();

  /*Para el div  */
  const miCaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombreValue.current.value);
    console.log(apellidoValue.current.value);
    console.log(emailValue.current.value);

    /*Cajad del div */
    /*Cambiar clase de la caja atraves de use ref */
    miCaja.current.classList.add("fondoVerde");
    /*Cambio de texto */
    miCaja.current.innerHTML = "Formulario enviado!";
  };
  return (
    <div>
      <h1>Formulario</h1>

      <div className="miCaja" ref={miCaja}>
        <h2>Pruebas con useRef</h2>
      </div>

      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreValue} />
        <br />
        <input type="text" placeholder="Apellidos" ref={apellidoValue} />
        <br />
        <input type="email" placeholder="Correo Electronico" ref={emailValue} />
        <br />

        <input type="submit" value="Enviar" />
      </form>

      <button onClick={()=> nombreValue.current.select()}>Empezar a rellenar form</button>
    </div>
  );
};
