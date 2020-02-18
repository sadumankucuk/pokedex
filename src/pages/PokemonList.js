import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonList } from '../redux/actions/pokemon.actions';

function PokemonList(props) {
  const { fetchPokemonList } = props;

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return <h1>Pokemon</h1>;
}

const mapStateToProps = state => {
  const { pokemonList } = state.pokemonList;
  console.log('state:', state.pokemonList);
  return { pokemonList };
};

const mapDispatchToProps = {
  fetchPokemonList
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
