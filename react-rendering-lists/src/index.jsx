// work backwards from ReactDOM.render

// function PokemonList
// pokemon={pokedex}  --> pokemon passed as props.propertyName
// pokemon={pokedex} --> pokedex passed as props value data

// function ListItem
// value={pokemon.name} --> passed as props.value for the <li>

import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
  return (
  <li>{props.value}</li>
  );
}

function PokemonList(props) {
  const listItems = pokedex.map(pokemon =>
    <ListItem key={pokemon.number.toString()} value={pokemon.name} />);
  return (
    <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokemonList pokemon={pokedex} />,
  document.querySelector('#root')
);
