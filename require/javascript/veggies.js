define([], function() {
  var vegPrices = {
  	spinach: 0.99,
  	tomatoes: 0.35,
  	onions: 0.15,
  	peppers: 0.25
  }	

  return {
  	getPrice: function(chosenVeg) {
  	  return vegPrices[chosenVeg];
  	}
  }

});
