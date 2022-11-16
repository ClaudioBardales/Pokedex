import React, { useState, useEffect } from 'react';
import axios from 'axios';
function PokeApi() {
  const [name, setName] = useState('');
  const [find, setFind] = useState('pikachu');
  const [img, setImg] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${find}`);
      console.log(res);
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
    }
    getData();
  }, [find]);

  const Typename = (event) => {
    setName(event.target.value);
  };

  const Search = () => {
    if (name !== '') setFind(name);
    setName('');
  };

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={img} alt="" />
          <div className="name">{find.toUpperCase()}</div>
          <div className="type">{type}</div>
          <input type="text" onChange={Typename} value={name} />
          <button onClick={Search}>Search</button>
        </div>
      </div>
    </>
  );
}

export default PokeApi;
