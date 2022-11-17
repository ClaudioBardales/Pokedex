import { hot } from 'react-hot-loader/root';
import React from 'react';
import PokeApi from './PokeApi';
import GlobalStyle from './globalStyles';
const App = () => (
  <>
    <GlobalStyle />
    <PokeApi />
  </>
);

export default hot(App);
