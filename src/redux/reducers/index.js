import { combineReducers } from 'redux';
import { pokemonListReducers } from './pokemon.reducers';

const rootReducer = combineReducers({
  pokemonList: pokemonListReducers
});

export default rootReducer;
