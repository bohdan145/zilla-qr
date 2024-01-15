import logo from "./logo.svg";
import "./App.css";
import { useRedirectToStore } from "./utils";

function App() {
  const { handleRedirect } = useRedirectToStore();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={handleRedirect}>
          HELLO WORLD
        </button>
      </header>
    </div>
  );
}

export default App;
