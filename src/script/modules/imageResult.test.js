const ImageResult = require("./imageResult");

test("check imageresult html conversion result", () => {
  expect(
    new ImageResult(
      "testPie",
      "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      "mealID1234"
    ).toHTML()
  ).toBe(
    '<div class="imageResult"><img src="https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg" alt="testPie" mealId="mealID1234"><div class="imageInfo" mealId="mealID1234"><h3 mealId="mealID1234">testPie</h3></div></div>'
  );
});
