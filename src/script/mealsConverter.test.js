const mealsConverter  =  require('./mealsConverter')
const ImageResult = require('./imageResult')
const fetch = require("node-fetch");

var mealsResponse 
beforeEach( async()=>{
    mealsResponse= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pie").then(r=>r.json())
})
test('check conversion of meals response to imageResult []', ()=>{
        var expectedResponse = [new ImageResult( "Fish pie",  "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",  "52802"), new ImageResult( "Sugar Pie",  "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",  "52931"), new ImageResult( "Rappie Pie",  "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",  "52933"), new ImageResult( "Mince Pies",  "https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg",  "52991"), new ImageResult( "Pumpkin Pie",  "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",  "52857"), new ImageResult( "Key Lime Pie",  "https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg",  "52859"), new ImageResult( "Three Fish Pie",  "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",  "52882"), new ImageResult( "Minced Beef Pie",  "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",  "52876"), new ImageResult( "Choc Chip Pecan Pie",  "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",  "52856"), new ImageResult( "Lamb and Potato pie",  "https://www.themealdb.com/images/media/meals/sxrpws1511555907.jpg",  "52877"), new ImageResult( "Beef and Oyster pie",  "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",  "52878"), new ImageResult( "McSinghs Scotch pie",  "https://www.themealdb.com/images/media/meals/vssrtx1511557680.jpg",  "52880"), new ImageResult( "Beef and Mustard Pie",  "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",  "52874"), new ImageResult( "Steak and Kidney Pie",  "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",  "52881"), new ImageResult( "Strawberry Rhubarb Pie",  "https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg",  "53005"), new ImageResult( "Chicken Ham and Leek Pie",  "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",  "52875"), new ImageResult( "Vegetable Shepherd’s Pie",  "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",  "53000")]

    // console.log(mealsResponse);
    expect(
        mealsConverter(mealsResponse)
    ).toStrictEqual(expectedResponse)
})