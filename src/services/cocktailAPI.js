export const fetchRandomCocktail = () => {
  return fetch('https://the-cocktail-db.p.rapidapi.com/random.php', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4d0c4dbb5fmshbd5f8c52710304ap1c52acjsne72ae3a0d674',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    },
  })
    .then((res) => res.json())

    .catch((err) => {
      console.error(err);
    });
};
