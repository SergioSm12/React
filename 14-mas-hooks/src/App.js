import logo from "./logo.svg";
import "./App.css";
import { MiFormulario } from "./components/MiFormulario";
import { MiUsuario } from "./components/MiUsuario";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Hook  personalizado para formulario 
        <MiFormulario/>*/}

        {/*Hook personalizado para ajax */}
        <MiUsuario />
      </header>
    </div>
  );
}

export default App;
