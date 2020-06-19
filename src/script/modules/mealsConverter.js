const ImageResult = require("./imageResult");
var mealsToImageResultConverter = (mealsResponse) => {
  return mealsResponse.meals.map((meal) => {
    let imageInfor = meal.strMeal;
    let mealId = meal.idMeal;
    let imageLink = meal.strMealThumb;
    return new ImageResult(imageInfor, imageLink, mealId);
  });
};
var mealsToImageResultHTMLConverter = (mealsResponse) => {
  let imageResults = mealsToImageResultConverter(mealsResponse);
  return imageResults.map((i) => i.toHTML()).reduce((a, b) => a + b);
};
module.exports = mealsToImageResultConverter;
