class Ingredient{
    constructor(ingredientName, ingredientQuantity){
        this.ingredientName = ingredientName;
        this.ingredientQuantity  = ingredientQuantity;
    }
    getIngredientName(){
        return this.ingredientName;
    }
    getIngredientQuantity(){
        return this.ingredientQuantity
    }
}
module.exports = Ingredient