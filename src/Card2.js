import React, { useState, useEffect } from "react";

const Card2 = (props) => {
  const { nome, catchInfo, i } = props;
  console.log("ReRender CARD =", i);

  const [name, setName] = useState(nome);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(false);
  }, [nome]);

  useEffect(() => {
    catchInfo(name, i);
    if (name !== nome) setIsModified(true);
    else setIsModified(false);
  }, [name]);

  return (
    <div style={{ border: "1px solid black", width: "30%", margin: "40px" }}>
      <h3>
        {isModified && "*"}Nome: <br />
        {nome}
      </h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Card2;
