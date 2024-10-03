import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/KevinKoltraka/WeatherWeb">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-koltraka-878b45255/">
          Kevin Koltraka
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://sdacademy.al/">
        Software Development Academy
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
