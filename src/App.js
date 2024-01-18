import logo from "./logo.png";
import "./App.css";
import { useRedirectToStore } from "./utils";

function App() {
  const { handleRedirect } = useRedirectToStore();

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo fadeInUp" alt="logo" />
        <h3 className="fadeInUp" style={{ animationDelay: ".2s" }}>
          Download Zilla,
          <br /> the #1 rated teen earnings app
        </h3>
        <button
          className="App-link fadeInUp"
          style={{ animationDelay: ".4s" }}
          onClick={handleRedirect}
        >
          Download Zilla
        </button>
      </header>
    </>
  );
}

export default App;
