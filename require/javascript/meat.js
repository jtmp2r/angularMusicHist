define([], function() {
  var meatPrice = {
  	bacon: 6.00,
  	beef: 2.00,
  	turkey: 1.00,
  	chicken: 2.50
  }	

  return {
  	getPrice: function(chosenMeat) {
  	  return meatPrice[chosenMeat];
  	}
  }
});