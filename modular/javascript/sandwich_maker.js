define(["jquery"], function($, bread, vegies, meat) {
	$(document).ready(function() {
	var finalPrice = 0;

	$("#button").click(function() {
		var veggieChosen = $("#veggie_type").val();
		var veggiePrice = Sandwich.getVeg(veggieChosen);
		finalPrice += parseInt(veggiePrice);
	})

	$("#button").click(function() {
		var breadChosen = $("#bread_type").val();
		var breadPrice = Sandwich.getBread(breadChosen);
		finalPrice += parseInt(breadPrice);
	})
    
	$("#button").click(function() {
		var meatChosen = $("#meat_type").val();
		var meatPrice = Sandwich.getMeat(meatChosen);
		finalPrice += parseInt(meatPrice);
	})


	$("#button").click(function() {
		var cheeseChosen = $("#cheese_type").val();
		var cheesePrice = Sandwich.getCheese(cheeseChosen);
		finalPrice += parseInt(cheesePrice);
	})


	$("#button").click(function() {
		var condimentsChosen = $("#veggie-chosen").val();
		var veggiePrice = Sandwich.getVeg(veggieChosen);
		finalPrice += parseInt(veggiePrice);
	})

	


   })
});