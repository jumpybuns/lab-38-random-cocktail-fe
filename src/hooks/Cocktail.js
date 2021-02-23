import { useState } from 'react';
import { fetchUserCocktails } from '../services/cocktailAPI';

export const useCocktails = () => {
  const [userCocktails, setUserCocktails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserCocktails().then((userCocktails) => {
      setUserCocktails(userCocktails);
    });
  };

  return {
    handleSubmit,
    userCocktails,
  };
};
