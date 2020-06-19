const singleMealConverter = require("./singleMealConverter");
const RecepieResult = require("./recepieResult");
const Ingredient = require("./Ingredients");
const fetch = require("node-fetch");

var meals; //= JSON.parse('{"meals":[{"idMeal":"52771","strMeal":"Spicy Arrabiata Penne","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"Italian","strInstructions":"do something","strMealThumb":"https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg","strTags":"Pasta,Curry","strYoutube":"https://www.youtube.com/watch?v=1IszT_guI08","strIngredient1":"penne rigate","strIngredient2":"olive oil","strIngredient3":"garlic","strIngredient4":"chopped tomatoes","strIngredient5":"red chile flakes","strIngredient6":"italian seasoning","strIngredient7":"basil","strIngredient8":"Parmigiano-Reggiano","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":null,"strIngredient17":null,"strIngredient18":null,"strIngredient19":null,"strIngredient20":null,"strMeasure1":"1 pound","strMeasure2":"1/4 cup","strMeasure3":"3 cloves","strMeasure4":"1 tin ","strMeasure5":"1/2 teaspoon","strMeasure6":"1/2 teaspoon","strMeasure7":"6 leaves","strMeasure8":"spinkling","strMeasure9":"","strMeasure10":"","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":null,"strMeasure17":null,"strMeasure18":null,"strMeasure19":null,"strMeasure20":null,"strSource":null,"dateModified":null}]}')

beforeEach(async () => {
  meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771"
  ).then((r) => r.json());
  meals.meals[0].strInstructions = "do something";
});

test("check conversion of meal response to recepie result", () => {
  ingredients = [
    new Ingredient("penne rigate", "1 pound"),
    new Ingredient("olive oil", "1/4 cup"),
    new Ingredient("garlic", "3 cloves"),
    new Ingredient("chopped tomatoes", "1 tin "),
    new Ingredient("red chile flakes", "1/2 teaspoon"),
    new Ingredient("italian seasoning", "1/2 teaspoon"),
    new Ingredient("basil", "6 leaves"),
    new Ingredient("Parmigiano-Reggiano", "spinkling"),
  ];
  let recepie = new RecepieResult(
    "Spicy Arrabiata Penne",
    "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "Pasta,Curry",
    "do something",
    ingredients
  );

  expect(singleMealConverter(meals)).toStrictEqual(recepie);
});
