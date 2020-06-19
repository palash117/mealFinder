//imports
const mealsResponseConverter = require("./mealsConverter");
const singleMealResponseConverter = require("./singleMealConverter");
const Ingredient = require("./Ingredients");
const ImageResult = require("./imageResult");
const RecepieResult = require("./recepieResult");

//constants

//dom refferneces
var elSearchBar;
var elSearchButton;
var elRandomRecepie;
var elImageSearchResult;
var elRecepieContainer;
//init dom refferences & setup event listeners
var init = () => {
  initDomRefferneces();
  setupEventListeners();
  resetDomValues();
};

var initDomRefferneces = () => {
  elSearchBar = document.querySelector(".searchBarInput");
  elSearchButton = document.querySelector(".search");
  elRandomRecepie = document.querySelector(".random");
  elImageSearchResult = document.querySelector(".imageSearchResult");
  elRecepieContainer = document.querySelector(".recepieContainer");
};

var setupEventListeners = () => {
  elSearchButton.addEventListener("click", searchEVLWrapper);
};

var resetDomValues = () => {
  //   elSearchButton;
};

// event listeners
var searchEvL = (afterFunc) => {
  searchText = getSearchText();
  searchResult = fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  )
    .then((r) => r.json())
    .then((response) => {
      setAndReturnHtml(
        mealsResponseConverter(response)
          .map((i) => i.toHTML())
          .reduce((a, b) => a + b),
        elImageSearchResult
      );
      afterFunc();
    });
};
var searchEVLWrapper = () => {
  searchEvL(() => {
    document
      .querySelectorAll(".imageResult")
      .forEach((el) => el.addEventListener("click", searchRecepie));
  });
};

var searchRecepie = (event) => {
  let mealId = getMealId(event.target);
  mealResponse = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  )
    .then((r) => r.json())
    .then((response) => {
      setAndReturnHtml(
        singleMealResponseConverter(response).toHTMl(),
        elRecepieContainer
      );
      elRecepieContainer.scrollTop = elRecepieContainer.scrollHeight;
    });
};

var getSearchText = () => {
  return elSearchBar.value;
};

var setAndReturnHtml = (html, element) => {
  element.innerHTML = html;
  return html;
};
var getMealId = (element) => {
  return element.getAttribute("mealId");
};

window.onload = init;
console.log("script run ");
window.setInterval(function () {
  var elem = document.querySelector(".recepieContainer");
  elem.scrollTop = elem.scrollHeight;
}, 5000);
