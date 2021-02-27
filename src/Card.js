import React, { useState, useEffect, memo } from "react";

const Card = (props) => {
  const { nome, idade, altura, catchInfo, i, flag } = props;

  const [name, setName] = useState(nome);
  const [age, setAge] = useState(idade);
  const [isModified, setIsModified] = useState(false);

  if (flag) {
    catchInfo(i, name, age);
  }

  useEffect(() => {
    if (name !== nome || age !== idade) {
      setIsModified(true);
    } else setIsModified(false);
  }, [name, age, props]);

  return (
    <div style={{ border: "1px solid black", width: "30%", margin: "40px" }}>
      <h3>
        {isModified && "*"}Nome: {nome}
      </h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Idade: {idade} anos</p>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(parseInt(e.target.value));
        }}
      />
      <p>Altura: {altura} metros</p>
    </div>
  );
};

export default memo(Card);
