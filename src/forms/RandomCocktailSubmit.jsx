import React from 'react';
import RandomCocktailList from '../components/randomCocktails';
import { useRandom } from '../hooks/Random';

const RandomCocktailSubmit = () => {
  const { randomCocktail, handleSubmit } = useRandom();
  return (
    <div>
      <form>
        <button onClick={handleSubmit}>Get Random Cocktail</button>
        <RandomCocktailList randomCocktail={randomCocktail} />
      </form>
    </div>
  );
};
