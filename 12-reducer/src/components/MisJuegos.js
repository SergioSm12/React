import React, { useReducer, useEffect } from "react";
import { JuegoReducer } from "../reducers/JuegoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    /*Creamos el objeto para recibir los datos*/

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: "crear",
      payload: juego,
    };

    dispatch(accion);
    console.log(juegos);
  };

  const borrar = (id) => {
    const action = {
      type: "borrar",
      payload: id,
    };

    dispatch(action);
  };

  const editar = (e, id) => {
    let juego = {
      id,
      titulo: e.target.value,
      descripcion: e.target.value,
    };

    const accion = {
      type: "editar",
      payload: juego,
    };

    dispatch(accion);
  };

  return (
    <div>
      <h1>Estos son mis videojuegos</h1>
      <p>Numero de videojuegos : {juegos.length}</p>

      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>
            {juego.titulo}
            &nbsp;<button onClick={(e) => borrar(juego.id)}>X</button>
            <input
              type="text"
              onBlur={(e) => editar(e, juego.id)}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  editar(e, juego.id);
                }
              }}
            />
          </li>
        ))}
      </ul>

      <h3>Agregar Juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <textarea name="descripcion" placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
