import React, { useEffect, useState } from "react";
import "./index.css";
import { cloneDeep } from "loadsh";
import Card from "./Card";

function App() {
  const [data, setData] = useState({
    "card#1": {
      nome: "Rodrigo",
      idade: 23,
      altura: 1.86,
    },
    "card#2": {
      nome: "Julia",
      idade: 21,
      altura: 1.7,
    },
    "card#3": {
      nome: "Letícia",
      idade: 23,
      altura: 1.65,
    },
    "card#4": {
      nome: "Natasha",
      idade: 22,
      altura: 1.75,
    },
    "card#5": {
      nome: "Vivian",
      idade: 23,
      altura: 1.73,
    },
  });

  // var cloned = cloneDeep(data);
  const [flag, setFlag] = useState(false);

  const catchInfo = (id, nome, idade) => {
    setData((oldData) => {
      return {
        ...oldData,
        [`card#${id + 1}`]: { ...oldData[`card#${id + 1}`], nome, idade },
      };
    });
    // cloned = {
    //   ...cloned,
    //   [`card#${id + 1}`]: { ...cloned[`card#${id + 1}`], nome, idade },
    // };
  };

  // useEffect(() => {
  //   let myVar = window.setTimeout(() => {
  //     setData(cloned);
  //     setFlag(false);
  //   }, 200);

  //   return () => {
  //     clearTimeout(myVar);
  //   };
  // }, [flag]);

  return (
    <div
      className="App"
      style={{ padding: "40px", textAlign: "center", background: "#f0f0f0" }}
    >
      <h1>React boladão</h1>
      <button
        onClick={() => {
          setFlag(true);
        }}
      >
        Pegar Info
      </button>
      {/* <button
        onClick={() => {
          console.log(cloned);
        }}
      >
        Ver Cloned
      </button> */}

      <div
        style={{
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(data).map(([key, value], i) => {
          return (
            <Card
              {...value}
              key={key}
              i={i}
              catchInfo={catchInfo}
              flag={flag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
