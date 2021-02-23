import React from 'react';
import PropTypes from 'prop-types';
import RandomCocktail from './RandomCocktail';

const RandomCocktailList = ({ randomCocktail }) => {
  console.log(randomCocktail);
  const cocktailElements = randomCocktail.map((drinks) => (
    <li key={drinks.idDrink}>
      <RandomCocktail {...drinks} />
    </li>
  ));

  return (
    <>
      <ul>{cocktailElements}</ul>
    </>
  );
};

RandomCocktailList.propTypes = {
  randomCocktail: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strGlass: PropTypes.string.isRequired,
      strInstructions: PropTypes.string.isRequired,
    })
  ),
};

export default RandomCocktailList;
