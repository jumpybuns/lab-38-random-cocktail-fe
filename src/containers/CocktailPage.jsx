import React from 'react';
import RandomCocktailSubmit from '../forms/RandomCocktailSubmit';
import UserCocktails from '../forms/UserCocktails';
import UserSubmit from '../forms/UserSubmit';

const CocktailPage = () => {
  return (
    <>
      <RandomCocktailSubmit />
      <UserCocktails />
      <UserSubmit />
    </>
  );
};

export default CocktailPage;
