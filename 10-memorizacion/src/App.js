import logo from "./logo.svg";
import "./App.css";
import { Gestion } from "./components/Gestion";
import { Tareas } from "./components/Tareas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Ejercicio para useMemo <Tareas />*/}

        {/*Ejercicio para metodo memo para componentes */}
        <Gestion />
      </header>
    </div>
  );
}

export default App;
