define([], function() {
  var cheesePrice = {
  	swiss: 0.50,
  	cheddar: 0.20,
  	mozzarela: 0.90,
  	provolone: 1.00
  }	

  return {
  	getPrice: function(chosenCheese) {
  	  return cheesePrice[chosenCheese];
  	}
  }
});