import * as actionTypes from '../actions/actionTypes';

const PokemonListInitialState = {
  loadingPokemonList: false,
  pokemonList: [],
  errorPokemonList: false
};

const PokemonInitialState = {
  loadingPokemon: false,
  pokemon: {},
  errorPokemon: false
};

export const pokemonListReducers = (
  state = PokemonListInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON_LIST:
      return {
        ...state,
        loadingPokemonList: true
      };
    case actionTypes.GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loadingPokemonList: false,
        pokemonList: action.payload
      };
    case actionTypes.GET_POKEMON_LIST_FAILED:
      return {
        ...state,
        loadingPokemonList: false,
        errorPokemonList: action.error
      };
    default:
      return state;
  }
};

export const pokemonReducers = (state = PokemonInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON:
      return {
        ...state,
        loadingPokemon: true
      };
    case actionTypes.GET_POKEMON_SUCCESS:
      return {
        ...state,
        loadingPokemon: false,
        pokemon: action.payload
      };
    case actionTypes.GET_POKEMON_FAILED:
      return {
        ...state,
        loadingPokemon: false,
        errorPokemon: action.error
      };
    default:
      return state;
  }
};
