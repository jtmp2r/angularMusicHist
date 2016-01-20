define([], function() {
  var breadPrices = {
  	rye: 0.50,
  	wheat: 0.75,
  	ciabatta: 4.00,
  	pumpernickel: 0.10
  };

  return {
  	getPrice: function(chosenBread) {
  	 return breadPrices[chosenBread];
  	}
  };	 
});