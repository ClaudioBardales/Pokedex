import { hot } from 'react-hot-loader/root';
import React from 'react';
import PokeApi from './PokeApi';
import 'App.css';
const App = () => (
  <>
    <PokeApi />
  </>
);

export default hot(App);
