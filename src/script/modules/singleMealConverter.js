const  RecepieResult = require('./recepieResult')
const Ingredient = require('./Ingredients')
var singleMealConverter = (mealInfo)=>{
    mealInfo = mealInfo.meals[0]
    let recepieName = mealInfo.strMeal;
    let recepieImageLink = mealInfo.strMealThumb;
    let recepieTag = mealInfo.strTags;
    let recepieMethod = mealInfo.strInstructions;
    let ingredients = [];
    let ingredientKey = 'strIngredient';
    let quantityKey = 'strMeasure';
    let i = 1;
    while(true){
        // console.log(mealInfo[ingredientKey+i])
        if(mealInfo[ingredientKey+i]!=null && mealInfo[ingredientKey+i]!=undefined && mealInfo[ingredientKey+i]!=''){
            ingredients.push( new Ingredient(mealInfo[`${ingredientKey+i}`], mealInfo[`${quantityKey+i}`]))
        }
        else break;
        i++;
    }
    return new RecepieResult(recepieName, recepieImageLink, recepieTag, recepieMethod, ingredients)
}

module.exports = singleMealConverter