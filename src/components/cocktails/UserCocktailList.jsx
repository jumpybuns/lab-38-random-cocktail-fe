import React from 'react';
import PropTypes from 'prop-types';
import UserCocktail from './UserCocktail';

const UserCocktailList = ({ userCocktails }) => {
  const cocktailElements = userCocktails.map((cocktail) => (
    <li key={cocktail.id}>
      <UserCocktail {...cocktail} />
    </li>
  ));

  return (
    <>
      <ul>{cocktailElements}</ul>
    </>
  );
};

UserCocktailList.propTypes = {
  userCocktails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      glass: PropTypes.string.isRequired,
      recipe: PropTypes.string.isRequired,
    })
  ),
};
export default UserCocktailList;
