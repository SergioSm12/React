import { useMayus } from "../hooks/useMayus";

export const PruebasCustom = () => {
  const { estado, mayusculas, minusculas, concatenar } =
    useMayus("Sergio Mesa");

  return (
    <div>
      <h1>Probando Componentes personalizados</h1>
      {estado}
      <button
        onClick={(e) => {
          mayusculas();
        }}
      >
        Poner en mayusculas
      </button>

      <button
        onClick={(e) => {
          minusculas();
        }}
      >
        Poner en minusculas
      </button>

      <button
        onClick={(e) => {
          concatenar(" " + "Buitrago");
        }}
      >
        concatenar
      </button>
    </div>
  );
};
