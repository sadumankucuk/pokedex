import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={PokemonList} />
      <Route path="/pokemon/:id" exact component={Pokemon} />
    </Switch>
  );
}

export default App;
