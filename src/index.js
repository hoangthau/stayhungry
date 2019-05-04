import React from "react";
import ReactDOM from "react-dom";

import RouterApp from "./routes";
import s from "./styles.module.css";

import Nav from "./Nav";

function App() {
  return (
    <div className={s.container}>
      <RouterApp>
        <h1>Stay Hungry Stay Foolish</h1>
        <hr />
        <Nav />
      </RouterApp>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
