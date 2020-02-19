import React, { useEffect, useState } from 'react';
import TableComponent from '../component/TableComponent';
import { connect } from 'react-redux';
import { fetchPokemonList } from '../redux/actions/pokemon.actions';

const PokemonList = props => {
  const { fetchPokemonList, pokemonList } = props;
  const [columns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Supertype', field: 'supertype' },
    { title: 'Evolves From', field: 'evolvesFrom' },
    { title: 'HP', field: 'hp' },
    { title: 'Rarity', field: 'rarity' },
    { title: 'Image Url', field: 'imageUrl' }
  ]);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <div style={{ margin: 40 }}>
      <h1>Pokemon</h1>
      <TableComponent columns={columns} data={pokemonList} />
    </div>
  );
};

const mapStateToProps = state => {
  const { pokemonList } = state.pokemonList;
  console.log('state:', state.pokemonList);
  return { pokemonList };
};

const mapDispatchToProps = {
  fetchPokemonList
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
