import React from 'react';
import RandomCocktailList from '../components/randomCocktails/RandomCocktailList';
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

export default RandomCocktailSubmit;
