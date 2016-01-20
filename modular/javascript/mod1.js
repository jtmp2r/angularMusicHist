var basicCarModule = {
  
  color: "blue",
  size: "sedan",


  options: {
  	sunRoof: true,
  	spoiler: false,
  	racingStripes: false,
  	leatherSeats: true,
  	heatedSeats: true,
  	underLight: true
  },
  
  setSpoilerOption: function (spoiler) {
  	this.options.spoiler = spoiler;
  },

  setColor: function (color) {
  	this.color = color;
  },

  setOptions: function (options) {
  	this.options = options;
  }

}
  
basicCarModule.setColor("green");

console.log('basicCarModule', basicCarModule)








