import React, { useState, useEffect } from "react";
import { data, clonedData } from "./data";

const Card3 = (props) => {
  const { nome, i } = props;
  console.log("ReRender CARD =", i);

  const [name, setName] = useState(nome);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    clonedData[i] = name;

    if (isModified && nome === name) setIsModified(false);
    if (!isModified && nome !== name) setIsModified(true);
  }, [name]);

  useEffect(() => {
    setIsModified(false);
  }, [nome]);

  //variável do timer global (bom funcionamento)
  let timer = null;

  return (
    <div style={{ border: "1px solid black", width: "30%", margin: "40px" }}>
      <h3>
        {isModified && "*"}Nome: <br />
        {nome}
      </h3>
      <input
        type="text"
        // value={name}     //não pode setar o value como state (da ruim)
        onChange={(e) => {
          let value = e.target.value;
          // setName(value);

          clearTimeout(timer);
          timer = setTimeout(() => {
            setName(value);
          }, 200);
        }}
      />
    </div>
  );
};

export default Card3;
