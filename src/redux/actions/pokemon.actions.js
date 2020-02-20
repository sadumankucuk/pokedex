import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getPokemonList() {
  return dispatch => {
    dispatch({ type: actionTypes.GET_POKEMON_LIST });
    axios
      .get('https://api.pokemontcg.io/v1/cards')
      .then(response => {
        const pokemonListFilter = response.data.cards.filter(
          pokemon => pokemon.evolvesFrom && pokemon.rarity !== ''
        );
        return pokemonListFilter;
      })
      .then(response => {
        const formattedPokemonList = formatPokemonListData(response);
        dispatch({
          type: actionTypes.GET_POKEMON_LIST_SUCCESS,
          payload: formattedPokemonList
        });
      })
      .catch(error =>
        dispatch({ type: actionTypes.GET_POKEMON_LIST_FAILED, payload: error })
      );
  };
}

const formatPokemonListData = data => {
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

export const getPokemon = pokemonId => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_POKEMON });
    axios
      .get(`https://api.pokemontcg.io/v1/cards/${pokemonId}`)
      .then(response => {
        const formattedPokemonData = formatPokemonData(response.data.card);
        dispatch({
          type: actionTypes.GET_POKEMON_SUCCESS,
          payload: formattedPokemonData
        });
      })
      .catch(error =>
        dispatch({ type: actionTypes.GET_POKEMON_FAILED, payload: error })
      );
  };
};

const formatPokemonData = data => {
  return {
    id: data.id,
    name: data.name,
    supertype: data.supertype,
    evolvesFrom: data.evolvesFrom,
    hp: data.hp,
    rarity: data.rarity,
    imageUrl: data.imageUrl,
    attacks: data.attacks.map(attack => {
      return {
        name: attack.name,
        damage: attack.damage
      };
    })
  };
};

export const search = value => {
  return dispatch => {
    dispatch({ type: actionTypes.SEARCH, payload: value });
  };
};

export const filterByRarity = value => {
  return dispatch => {
    dispatch({ type: actionTypes.FILTER, payload: value });
  };
};

export const sortByHp = value => {
  return dispatch => {
    dispatch({ type: actionTypes.SORT, payload: value });
  };
};
