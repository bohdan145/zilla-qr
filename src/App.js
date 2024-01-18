import logo from "./logo.png";
import arrow from "./arrow.png";
import "./App.css";
import { useRedirectToStore } from "./utils";

function App() {
  const { handleRedirect } = useRedirectToStore();

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo fadeInUp" alt="logo" />
        <div style={{ position: "relative" }}>
          <h3 className="fadeInUp" style={{ animationDelay: ".2s" }}>
            Download Zilla,
            <br /> the #1 rated teen earnings app
          </h3>
          <img
            src={arrow}
            className="arrow fadeIn"
            style={{ animationDelay: ".8s" }}
            alt="logo"
          />
        </div>

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
