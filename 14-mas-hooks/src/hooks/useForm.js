import React, { useState } from "react";
export const useForm = (objetoInicial = {}) => {
  const [formulario, setFormulario] = useState({ objetoInicial });

  //crear funcion para evitar mapear el form(serializar form) y recivir el target
  const serializarFormulario = (etarget) => {
    const datosFormulario = new FormData(etarget);

    /*Creo un objeto que recibira los name y values de los inputs */
    const objetoCompleto = {};

    for (let [name, value] of datosFormulario) {
      /*Formo el objeto */
      objetoCompleto[name] = value;
    }

    return objetoCompleto;
  };

  //recibir los datos del formulario
  const enviado = (e) => {
    e.preventDefault();
    /*Llamamos la funcion para recibir el form */
    let curso = serializarFormulario(e.target);
    //Asignamos los datos a la constante formulario
    setFormulario(curso);

    /*Cambiar className del prev cuando se envie */
    document.querySelector(".object").classList.add("enviado");
  };

  /*Funcion para re escribir datos al objeto directamente */
  const cambiar = (e) => {
    const { name, value } = e.target;

    setFormulario({
      /*Expando la constante 'arreglo' y agrego los datos */
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    enviado,
    cambiar,
  };
};
