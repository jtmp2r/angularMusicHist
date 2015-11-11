var app = angular.module("MusicHis", [])

app.controller("MusicHis", function($scope) {
	$scope.title = "THIS IS MUSIC!!!";
  

  $scope.songS =
	  	getList: function(getData) {
	    	$.ajax({
		  		url: "songs.json"
		  	}).done(function(songList) {
	    		 return getData(songList);
	 			})
	 	  }	
    
  	
 

})