define([], function() {
  var condimentPrice = {
  	honey_mustard: 0.25,
  	ranch: 0.20,
  	bbq: 0.23,
  	sweet_chili: 0.40
  }	

  return {
  	getPrice: function(chosenCondiment) {
  	  return condimentPrice[chosenCondiment];
  	}
  }
});