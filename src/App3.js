import React, { useState } from "react";
import "./index.css";
import Card from "./Card3";
import { data, clonedData } from "./data";

function App3() {
  console.log("ReRender APP");
  const [reRender, setReRender] = useState(false);

  return (
    <div
      className="App"
      style={{ padding: "40px", textAlign: "center", background: "#f0f0f0" }}
    >
      <h1>React boladão</h1>
      {clonedData.map((x, i) => {
        return <p key={i}>{x}</p>;
      })}
      <button
        onClick={() => {
          console.log("Clicado");
          setReRender(!reRender);
        }}
      >
        Pegar Info
      </button>
      <button
        onClick={() => {
          console.log(clonedData);
        }}
      >
        Console
      </button>
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {clonedData.map((value, i) => {
          return <Card nome={value} key={i} i={i} />;
        })}
      </div>
    </div>
  );
}

export default App3;
