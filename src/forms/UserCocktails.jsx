import React from 'react';
import UserCocktailList from '../components/cocktails/UserCocktails';
import { useCocktails } from '../hooks/Cocktail.js';

const UserCocktails = () => {
  const { userCocktails } = useCocktails();

  return (
    <div>
      <UserCocktailList userCocktails={userCocktails} />
    </div>
  );
};

export default UserCocktails;
