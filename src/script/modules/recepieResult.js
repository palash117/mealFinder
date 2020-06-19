class RecepieResult {
  constructor(
    recepieName,
    recepieImageLink,
    recepieTag,
    recepieMethod,
    recepieIngredients
  ) {
    this.recepieName = recepieName;
    this.recepieImageLink = recepieImageLink;
    this.recepieTag = recepieTag;
    this.recepieMethod = recepieMethod;
    this.recepieIngredients = recepieIngredients;
  }
  toHTMl() {
    let html =
      `<div class="recepieName">` +
      `<h3>${this.recepieName}</h3></div>` +
      `<img class="recepieImage" src="${this.recepieImageLink}" alt="${this.recepieName}">` +
      this.getRecepieTag() +
      `<div class="recepieMethod">${this.recepieMethod}</div>` +
      `<div class="recepieIngredients">` +
      this.getRecepieIngredientsHtml() +
      `</div>`;
    // console.log(html)
    return html;
  }
  getRecepieTag() {
    if ((this.recepieTag != null) | (this.recepieTag != undefined)) {
      return `<div class="recepieTag"><h3>${this.recepieTag}</h3></div>`;
    } else return "";
  }
  getRecepieIngredientsHtml() {
    // console.log(this.recepieIngredients)
    return this.recepieIngredients
      .map(
        (b) =>
          `<div class="recepieIngredient"><div class="ingredientName">${b.getIngredientName()}</div><div class="ingredientQuantity">${b.getIngredientQuantity()}</div></div>`
      )
      .reduce((a, b) => a + b);
  }
  testFunc() {
    return 10;
  }
}
module.exports = RecepieResult;
