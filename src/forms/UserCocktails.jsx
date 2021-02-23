import React from 'react';
import UserCocktailList from '../components/cocktails/UserCocktailList';
import { useCocktails } from '../hooks/Cocktail.js';

const UserCocktails = () => {
  const { userCocktails, handleSubmit } = useCocktails();

  return (
    <div>
      <form>
        <button onClick={handleSubmit}>User Cocktail Menu</button>
        <UserCocktailList userCocktails={userCocktails} />
      </form>
    </div>
  );
};

export default UserCocktails;
