requirejs.config({
  baseUrl: "./javascripts",
  paths:{
  	"jquery": "../bower_components/jquery/dist/jquery.min"
  }
});

require(["jquery", "utilities"], function($, utilities) {
  
  $("#money").html("Hello")
  
});