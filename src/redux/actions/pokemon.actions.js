import * as actionTypes from './actionTypes';
import axios from 'axios';

export function fetchPokemonList() {
  return dispatch => {
    dispatch({ type: actionTypes.GET_POKEMON_LIST });
    axios
      .get('https://api.pokemontcg.io/v1/cards')
      .then(response => {
        const pokemonFilter = response.data.cards.filter(
          pokemon => pokemon.evolvesFrom && pokemon.rarity !== ''
        );
        return pokemonFilter;
      })
      .then(response => {
        const formattedData = formatPokemonData(response);
        dispatch({
          type: actionTypes.GET_POKEMON_LIST_SUCCESS,
          payload: formattedData
        });
      })
      .catch(error =>
        dispatch({ type: actionTypes.GET_POKEMON_LIST_FAILED, payload: error })
      );
  };
}

const formatPokemonData = data => {
  return data.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      supertype: pokemon.supertype,
      evolvesFrom: pokemon.evolvesFrom,
      hp: pokemon.hp,
      rarity: pokemon.rarity,
      imageUrl: pokemon.imageUrl
    };
  });
};
