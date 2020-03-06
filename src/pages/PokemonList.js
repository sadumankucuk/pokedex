/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { TextField, Grid, Select, MenuItem } from '@material-ui/core';
import TableComponent from '../component/TableComponent';
import { connect } from 'react-redux';
import {
  getPokemonList,
  search,
  filterByRarity,
  sortByHp
} from '../redux/actions/pokemon.actions';

const PokemonList = props => {
  const {
    loadingPokemonList,
    getPokemonList,
    pokemonList,
    search,
    filterByRarity,
    uniqueRarity,
    sortByHp
  } = props;
  const [rarity, setRarity] = React.useState('');
  const [sortType, setSortType] = React.useState('');

  const [columns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Supertype', field: 'supertype' },
    { title: 'Evolves From', field: 'evolvesFrom' },
    { title: 'HP', field: 'hp' },
    { title: 'Rarity', field: 'rarity' },
    { title: 'Image Url', field: 'imageUrl' }
  ]);

  useEffect(getPokemonList, []);

  useEffect(() => {
    filterByRarity(rarity);
  }, [rarity]);

  const handleChangeSearch = event => {
    search(event.target.value);
  };

  const handleChangeFilter = event => {
    setRarity(event.target.value);
  };

  const handleChangeSortType = event => {
    setSortType(event.target.value);
    sortByHp(sortType);
  };

  return (
    <div style={{ margin: 40 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <TextField
            label="Search"
            type="search"
            onChange={handleChangeSearch}
          />
        </Grid>
        <Grid item xs={6} sm={1}>
          <Select value={rarity} onChange={handleChangeFilter} displayEmpty>
            <MenuItem value="" disabled>
              Filter Rarity
            </MenuItem>
            {uniqueRarity.map((rarity, index) => (
              <MenuItem key={index} value={rarity}>
                {rarity}
              </MenuItem>
            ))}
            <MenuItem value="clear">Clear Filtre</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Select value={sortType} onChange={handleChangeSortType} displayEmpty>
            <MenuItem value="" disabled>
              Sort Hp
            </MenuItem>
            <MenuItem value="asc">Sort ASC</MenuItem>
            <MenuItem value="desc">Sort DESC</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TableComponent
            columns={columns}
            data={pokemonList}
            loading={loadingPokemonList}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  const { pokemonList, uniqueRarity, loadingPokemonList } = state.pokemonList;
  return { pokemonList, uniqueRarity, loadingPokemonList };
};

const mapDispatchToProps = {
  getPokemonList,
  search,
  filterByRarity,
  sortByHp
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
