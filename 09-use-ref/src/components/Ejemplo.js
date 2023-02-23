import React, { useEffect, useRef, useState } from "react";

export const Ejemplo = () => {
  const [numeroSaludo, setNumeroSaludo] = useState(0);
  const saludosEnCola = useRef(numeroSaludo);

  useEffect(() => {
    saludosEnCola.current = numeroSaludo;
    setTimeout(() => {
      console.log("Mensaje en cola:" + saludosEnCola.current);
    }, 2000);
  }, [numeroSaludo]);

  const enviarSaludo = (e) => {
    setNumeroSaludo(numeroSaludo + 1);
  };

  return (
    <div>
      <h1>Ejemplo de useref</h1>

      <h2>Saludos enciados: {numeroSaludo}</h2>
      <button onClick={enviarSaludo}> Enviar saludo</button>
      <hr />
    </div>
  );
};
