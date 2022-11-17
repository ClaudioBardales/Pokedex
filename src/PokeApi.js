import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokeApi = () => {
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
    <Container>
      <Wrapper>
        <img src={img} alt="" />
        <div>{find.toUpperCase()}</div>
        <div>{type}</div>
        <input type="text" onChange={Typename} value={name} />
        <Button onClick={Search}>Search</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  border: 5px solid #ffde00;
  background-color: #3b4cca;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 25px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`;

const Button = styled.div`
  border: none;
  text-align: center;
  padding: 10px;
  background-color: #ff0000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export default PokeApi;
