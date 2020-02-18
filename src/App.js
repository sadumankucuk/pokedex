import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={PokemonList} />
    </Switch>
  );
}

export default App;
