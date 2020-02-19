import { combineReducers } from 'redux';
import { pokemonListReducers, pokemonReducers } from './pokemon.reducers';

const rootReducer = combineReducers({
  pokemonList: pokemonListReducers,
  pokemon: pokemonReducers
});

export default rootReducer;
