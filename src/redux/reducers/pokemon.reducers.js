import * as actionTypes from '../actions/actionTypes';

const PokemonListInitialState = {
  loadingPokemonList: false,
  pokemonList: [],
  errorPokemonList: false
};

export const pokemonListReducers = (
  state = PokemonListInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMON_LIST_PENDING:
      return {
        ...state,
        loadingPokemonList: true
      };
    case actionTypes.FETCH_POKEMON_LIST_FULFILLED:
      return {
        ...state,
        loadingPokemonList: false,
        pokemonList: action.payload
      };
    case actionTypes.FETCH_POKEMON_LIST_REJECTED:
      return {
        ...state,
        loadingPokemonList: false,
        errorPokemonList: action.error
      };
    default:
      return state;
  }
};
