import { useState } from 'react';
import { fetchRandomCocktail } from '../services/cocktailAPI';

export const useRandom = () => {
  const [randomCocktail, setRandomCocktail] = useState([]);
  const [getRandomCocktail, setGetRandomCocktail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRandomCocktail(getRandomCocktail).then((cocktails) => {
      setRandomCocktail(cocktails);
    });
  };
  return {
    randomCocktail,
    handleSubmit,
    setGetRandomCocktail,
  };
};
