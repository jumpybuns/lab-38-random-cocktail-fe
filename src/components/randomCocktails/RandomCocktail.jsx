import React from 'react';

const RandomCocktail = ({ name, glass, recipe }) => (
  <figure>
    <h1>{name}</h1>
    <h2>{glass}</h2>
    <h3>{recipe}</h3>
  </figure>
);

export default RandomCocktail;
