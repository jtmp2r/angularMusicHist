define(["jquery"], function($) {
  return { 
  	getList: function(getData) {
    	$.ajax({
	  		url: "songs1.json"
	  	}).done(function(songList) {
    		return getData(songList);
 			})
 		}	
  }
});