import { useState } from 'react';
import { fetchUserCocktails } from '../services/cocktailAPI';

export const useCocktails = () => {
  const [userCocktails, setUserCocktails] = useState([]);
  const [getUserCocktails, setGetUserCocktails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserCocktails(getUserCocktails).then((userCocktails) => {
      setUserCocktails(userCocktails);
    });
  };

  return {
    handleSubmit,
    userCocktails,
    setGetUserCocktails,
  };
};
