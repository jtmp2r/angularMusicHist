$(document).ready(function() {
  $("#all-my-songs").html("<h1>Hello World</h1>");
  $("#all-my-songs").append("What is love? Baby don't hurt me.");
 

  $(".my-shit").addClass()
  //$(".my-shit").html("<h2>What up!?</h2>");
  //$(".my-shit").css("background-color", "green")
  //$(".my-shit").css({
  //	border: "10px solid black"
  //})

  $(".killThemAll").click(function() {
    $(".abc").remove();
  })
  
  $(".myItem").each(function () {
  	var theLi = $(this);

  	$(this).hover(function () {
  	  theLi.toggleClass("red");
  	});
  });

  $("#cool-button").click(function () {
  	window.alert("I see the virtue in madness");
  });
});

