
import { useForm } from "../hooks/useForm";

export const MiFormulario = () => {
  
    /*Desestructuramos los datos que vienen del hook useForm */
    const {formulario, enviado , cambiar} = useForm({});

  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso Guardado: {formulario.titulo}</p>
      <pre className="object">{JSON.stringify(formulario)}</pre>

      <form onSubmit={enviado} className="mi-formulario">
        <input
          type="text"
          onChange={cambiar}
          name="titulo"
          placeholder="Titulo:"
        />
        <input
          type="number"
          onChange={cambiar}
          name="anio"
          placeholder="Año publicacion:"
        />
        <textarea
          name="descripcion"
          onChange={cambiar}
          placeholder="Descripcion"
        ></textarea>
        <input
          type="text"
          name="autor"
          onChange={cambiar}
          placeholder="Autor: "
        />
        <input
          type="email"
          name="email"
          onChange={cambiar}
          placeholder="Correo de contacto:"
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
