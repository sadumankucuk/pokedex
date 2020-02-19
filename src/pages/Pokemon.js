import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemon.actions';

const Pokemon = props => {
  const { getPokemon, match } = props;

  useEffect(() => {
    getPokemon(match.params.id);
  }, [getPokemon, match]);

  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
};

const mapStateToProps = state => {
  const { pokemon } = state.pokemon;
  console.log('state:', state.pokemon);
  return { pokemon };
};

const mapDispatchToProps = {
  getPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
