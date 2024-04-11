import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import icon from "./assets/hungman_icon.png";
import Game from "./Game";

function App() {
  const [start, setStart] = useState(false);

  return !start ? (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={icon} style={{ height: "200px" }} alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Welcome to Hungman</h1>
      <div className="card">
        <button onClick={() => setStart(true)}>Start</button>
        <p>
          Made with <code>React</code>
        </p>
      </div>
    </>
  ) : (
    <Game startHandler={() => setStart(false)} />
  );
}

export default App;
