import React, { useState, useEffect, memo } from "react";

const Card2 = (props) => {
  const { nome, catchInfo, i } = props;
  console.log("ReRender CARD =", i);

  const [name, setName] = useState(nome);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(false);
  }, [nome]);

  useEffect(() => {
    let timeout = window.setTimeout(() => {
      catchInfo(name, i);
    }, 1000);

    if (name !== nome) setIsModified(true);
    else setIsModified(false);

    return () => {
      window.clearTimeout(timeout);
    };
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
          let value = e.target.value;
          setName(value);
        }}
      />
    </div>
  );
};

export default memo(Card2);
