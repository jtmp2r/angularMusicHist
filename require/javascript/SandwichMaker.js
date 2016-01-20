define(["jquery",  "bread", "veggies", "condiments", "cheese", "meat"], function($, bread, veggies, condiments, cheese, meat) {
 var sandwichPrice = 0;
  var toppingModules = {
  	bread: bread,
  	meat: meat,
  	cheese: cheese,
  	veggies: veggies,
  	condiments: condiments
  }

  $(".topping").change(function() {
    var chosenTopping = $(this).val();
    var toppingId = $(this).attr("id");
    console.log("toppingId", toppingId);
    var toppingPrice = toppingModules[toppingId].getPrice(chosenTopping)
    sandwichPrice += toppingPrice;
    $("#priceDisplay").html("You sandwich with cost $" + parseFloat(sandwichPrice).toFixed(2))
  })
	
	
});
//   Original code for project

//   $("#breads").change(function() {
//     var chosenBread = $(this).val();
//     var breadPrice = bread.getBreadPrice(chosenBread);
//     sandwichPrice += breadPrice;
//     $("#priceDisplay").html("You sandwich with cost $" + parseFloat(sandwichPrice).toFixed(2))
//   })  

//   $("#veggies").change(function() {
//    var chosenVeg = $(this).val();
//    var VegPrices = veggies.getVegPrice(chosenVeg);
//    sandwichPrice += vegPrices;
//   })
//   $("#meat").change(function() {
//    var chosenMeat = $(this).val();
//    var meatPrice = meat.getMeatPrice(chosenMeat);
//    sandwichPrice += meatPrice;
//   })
//   $("#cheese").change(function() {
//    var chosenCheese = $(this).val();
//    var cheesePrice = cheese.getCheesePrice(chosenCheese);
//    sandwichPrice += cheesePrice;
//   })
//   $("#condiments").change(function() {
//    var chosenCheese = $(this).val();
//    var cheesePrice = cheese.getCheesePrice(chosenCheese);
//    sandwichPrice += condimentPrice;
//   }) 
// });