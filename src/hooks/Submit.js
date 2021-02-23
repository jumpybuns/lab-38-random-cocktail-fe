import { useState } from 'react';
import { submitUserCocktail } from '../services/cocktailAPI';

export const useSubmit = () => {
  const [submitCocktail, setSubmitCocktail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserCocktail().then((cocktails) => {
      setSubmitCocktail(cocktails);
    });
  };

  return {
    handleSubmit,
    submitCocktail,
    setSubmitCocktail,
  };
};
