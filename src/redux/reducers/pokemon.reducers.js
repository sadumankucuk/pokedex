import * as actionTypes from '../actions/actionTypes';

const PokemonListInitialState = {
  loadingPokemonList: false,
  currentPokemonList: [],
  pokemonList: [],
  errorPokemonList: false,
  uniqueRarity: []
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
        pokemonList: action.payload,
        currentPokemonList: action.payload,
        uniqueRarity: [
          ...new Set(action.payload.map(pokemon => pokemon.rarity))
        ]
      };
    case actionTypes.GET_POKEMON_LIST_FAILED:
      return {
        ...state,
        loadingPokemonList: false,
        errorPokemonList: action.error
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        pokemonList: state.currentPokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case actionTypes.FILTER:
      const filter = action.payload;
      return {
        ...state,
        pokemonList:
          filter !== 'clear'
            ? state.currentPokemonList.filter(
                pokemon => pokemon.rarity.toLowerCase() === filter.toLowerCase()
              )
            : state.currentPokemonList
      };
    case actionTypes.SORT:
      const sortType = action.payload;
      return {
        ...state,
        pokemonList:
          sortType === 'asc'
            ? state.currentPokemonList.sort((a, b) => a.hp - b.hp)
            : state.currentPokemonList.sort((a, b) => b.hp - a.hp)
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
