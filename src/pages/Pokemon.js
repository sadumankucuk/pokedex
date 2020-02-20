import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemon.actions';
import CardComponent from '../component/CardComponent';

const Pokemon = props => {
  const { getPokemon, match, pokemon } = props;

  useEffect(() => {
    getPokemon(match.params.id);
  }, [getPokemon, match]);

  return <CardComponent pokemon={pokemon} />;
};

const mapStateToProps = state => {
  const { pokemon, loadingPokemon } = state.pokemon;
  return { pokemon, loadingPokemon };
};

const mapDispatchToProps = {
  getPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
