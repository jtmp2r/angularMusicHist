var CarLot = (function() {
	var carData = [];

	return {

		myCar: function() {
			var loadInventory = new XMLHttpRequest();

			  loadInventory.addEventListener("load", function() {
			  	carData = JSON.parse(this.responseText);
			  	console.log("My Car", carData);
			  })

			  loadInventory.open("GET", "inventory.json");
			  loadInventory.send();
		}
	}
}())

CarLot.myCar();