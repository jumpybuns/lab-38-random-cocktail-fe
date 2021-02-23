export const fetchRandomCocktail = () => {
  return fetch('https://the-cocktail-db.p.rapidapi.com/random.php', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4d0c4dbb5fmshbd5f8c52710304ap1c52acjsne72ae3a0d674',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    },
  })
    .then((res) => res.json())
    .then((drinks) =>
      drinks.drinks.map((drink) => ({
        name: drink.strDrink,
        glass: drink.strGlass,
        recipe: drink.strInstructions,
        ingredient1: drink.strIngredient1,
        measure1: drink.strMeasure1,
        ingredient2: drink.strIngredient2,
        measure2: drink.strMeasure2,
        ingredient3: drink.strIngredient3,
        measure3: drink.strMeasure3,
        ingredient4: drink.strIngredient4,
        measure4: drink.strMeasure4,
      }))
    )
    .catch((err) => {
      console.error(err);
    });
};

export const fetchUserCocktails = () => {
  fetch('https://protected-fjord-40366.herokuapp.com/api/v1/cocktails')
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
