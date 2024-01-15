import logo from "./logo.svg";
import "./App.css";
import { useRedirectToStore } from "./utils";

function App() {
  useRedirectToStore();

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button
        id="btn"
        onClick={() =>
          navigator.clipboard.writeText("HELLO FROM ZILLA @@#@#@#1231")
        }
      >
        HELLO WORLD
      </button>
    </div>
  );
}

export default App;
