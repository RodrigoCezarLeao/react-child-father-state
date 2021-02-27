import React, { useState } from "react";
import "./index.css";
import Card from "./Card2";

function App2() {
  console.log("ReRender APP");
  const [data, setData] = useState([
    "rodrigo",
    "luciana",
    "marlon",
    "pablo",
    "michel",
  ]);

  const [reRender, setReRender] = useState(false);

  const catchInfo = (nome, i) => {
    let newArray = data;
    newArray[i] = nome;

    setData(newArray);
  };

  return (
    <div
      className="App"
      style={{ padding: "40px", textAlign: "center", background: "#f0f0f0" }}
    >
      <h1>React boladão</h1>
      {data.map((x, i) => {
        return <p key={i}>{x}</p>;
      })}
      <button
        onClick={() => {
          setReRender(!reRender);
        }}
      >
        Pegar Info
      </button>

      <div
        style={{
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data.map((value, i) => {
          return <Card nome={value} key={i} i={i} catchInfo={catchInfo} />;
        })}
      </div>
    </div>
  );
}

export default App2;
