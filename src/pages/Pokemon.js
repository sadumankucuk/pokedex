import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemon } from '../redux/actions/pokemon.actions';
import CardComponent from '../component/CardComponent';

const Pokemon = props => {
  const { getPokemon, pokemon } = props;

  const { id } = useParams();

  useEffect(() => {
    getPokemon(id);
  }, [getPokemon, id]);

  return <CardComponent pokemon={pokemon} />;
};

const mapStateToProps = state => {
  const { pokemon } = state.pokemon;
  return { pokemon };
};

const mapDispatchToProps = {
  getPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
