import React, { useMemo, useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(1237);

  const guardarTareas = (e) => {
    e.preventDefault();

    //coge los elementos amteriores y los agrega al array
    setTareas((tarea) => [...tarea, e.target.titulo.value]);
  };

  const borrarTarea = (id) => {
    //Filtrar la tarea
    let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id);
    console.log(nuevas_tareas);
    //Actualizar el estado, guardar el nuevo listado de tareas
    setTareas(nuevas_tareas);
  };

  const sumarAlContador = (e) => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
      console.log("Ejecutando acumulacion de contadores pasados...");
    }

    return `Contador manual de tareas ${contador}`;
  };

  /*useMemo */
  /*Este metodo solo se va ejecutar cuando el contador se sume */
  const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className="tareas-container">
      <h1>Mis tareas</h1>

      <form onSubmit={guardarTareas}>
        <input type="text" name="titulo" placeholder="Describe tu tarea" />
        <input type="submit" value="Guardar" />
      </form>

      <h3>{memoContadores}</h3>
      <button onClick={sumarAlContador}>Sumar</button>

      <h3>Lista de tareas : </h3>

      <ul>
        {tareas.map((tarea, indice) => {
          return (
            <li key={indice}>
              {tarea}
              &nbsp;
              <button onClick={() => borrarTarea(indice)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
