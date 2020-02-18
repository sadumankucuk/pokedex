import axios from 'axios';

export function fetchPokemonList() {
  let url = 'https://api.pokemontcg.io/v1/cards';
  return dispatch => {
    dispatch({
      type: 'FETCH_POKEMON_LIST',
      payload: axios.get(url).then(response => response.data.cards)
    });
  };
}
