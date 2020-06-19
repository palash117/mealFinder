class ImageResult {
  constructor(imageInfor, imagelink, mealId) {
    this.imageLink = imagelink;
    this.imageInfo = imageInfor;
    this.mealId = mealId;
  }
  toHTML() {
    return `<div class="imageResult"><img src="${this.imageLink}" alt="${this.imageInfo}" mealId="${this.mealId}"><div class="imageInfo" mealId="${this.mealId}"><h3 mealId="${this.mealId}">${this.imageInfo}</h3></div></div>`;
  }
}
module.exports = ImageResult;
