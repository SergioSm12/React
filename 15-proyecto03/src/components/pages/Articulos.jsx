import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articulos = () => {
  /*Crear constante de articulos */
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url + "articulos";

    // desestructuramos la variable datos llamando al helper para hacer la peticion
    const { datos, cargando  } = await Peticion(url, "GET");
    /*
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();
   */

    if (datos.status === "success") {
      setArticulos(datos.articles);
    }
  };
  return (
    <>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => {
          return (
            <article key={articulo._id} className="articulo-item">
              <div className="mascara">
                <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" />
              </div>
              <div className="datos">
                <h3 className="title">{articulo.titulo}</h3>
                <p className="Descripcion">{articulo.contenido}</p>

                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
              </div>
            </article>
          );
        })
      ) : (
        /*Mostar otro troso de codigo cuando el length no se cumpla */
        <h1>No hay articulos</h1>
      )}
    </>
  );
};
