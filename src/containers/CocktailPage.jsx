import React from 'react';
import RandomCocktailSubmit from '../forms/RandomCocktailSubmit';
import UserCocktails from '../forms/UserCocktails';

const CocktailPage = () => {
  return (
    <>
      <RandomCocktailSubmit />
      <UserCocktails />
    </>
  );
};

export default CocktailPage;
