requirejs.config ({
  baseUrl: "./javascript",
  paths: {
  	"jquery": "../bower_components/jquery/dist/jquery.min"
  }
});

require(["SandwichMaker"], function() {});
  
