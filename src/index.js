import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <h1>Playing with UI </h1>
      <h2>Pure Accordion Example</h2>

      <Accordion />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
