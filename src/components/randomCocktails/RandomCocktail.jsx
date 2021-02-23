import React from 'react';

const RandomCocktail = ({
  name,
  glass,
  recipe,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  measure1,
  measure2,
  measure3,
  measure4,
}) => (
  <figure>
    <h1>{name}</h1>
    <h2>{glass}</h2>
    <h3>
      RECIPE: <b></b>
      {recipe}
    </h3>
    <h4>INGREDIENTS:</h4>
    <h4>
      {ingredient1}
      <b> </b>
      {measure1}
    </h4>
    <h4>
      {ingredient2}
      <b> </b>
      {measure2}
    </h4>
    <h4>
      {ingredient3}
      <b> </b>
      {measure3}
    </h4>
    <h4>
      {ingredient4}
      <b> </b>
      {measure4}
    </h4>
  </figure>
);

export default RandomCocktail;
