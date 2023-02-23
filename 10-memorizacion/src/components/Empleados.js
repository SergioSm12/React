import React, { useEffect, useState } from "react";

//React memo memoriza sin necesidad de renderizar.

export const Empleados = React.memo(({ page, mensaje }) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    console.log("Se ha vuelto a renderizar Empleados !!");

    /*Cada que se cambie el estado de empleados se ejecutara el console.log*/
  }, [empleados]);

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();

    setEmpleados(empleados);

  };

  useEffect(() => {
    conseguirEmpleados(page);
  }, [page]);

  /*Uso useCallback */
  mensaje();

  return (
    <div>
      <p>Mostrando la pagina: {page}</p>
      <ul className="empleados">
        {empleados.length >= 1 &&
          empleados.map((empleado) => {
            return (
              <li key={empleado.id}>
                {empleado.first_name + " " + empleado.last_name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
