import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="castle" />
        </main>
        <footer className="App-footer">
          An{" "}
          <a
            href="https://github.com/L-delara/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source code
          </a>{" "}
          by{" "}
          <a
            href="www.linkedin.com/in/ligia-de-lara-01627873"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ligia
          </a>{" "}
          hosted on{" "}
          <a
            href="https://app.netlify.com/teams/l-delara/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          for SheCodes React Workshop
        </footer>
      </div>
    </div>
  );
}
