import React from 'react';
import { useCocktails } from '../hooks/Cocktail';

const UserSubmit = () => {
  const { handleSubmit, setGetUserCocktails } = useCocktails();

  return (
    <form>
      <button onClick={handleSubmit}>Submit</button>
      <input
        type="text"
        placeholder="name"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="glass"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="recipe"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="ingredient"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="measure"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="ingredient"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="measure"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="ingredient"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="measure"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="ingredient"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
      <input
        type="text"
        placeholder="measure"
        onChange={({ target }) => setGetUserCocktails(target.value)}
      />
    </form>
  );
};

export default UserSubmit;
