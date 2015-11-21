var app = angular.module("musicHistory", ['ngRoute', 'firebase'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	  .when('/songs/list', {
	  	templateUrl: "partials/song-list.html",
	  	controller: 'SongListCtrl as songCtrl'
	  })
	  .when('/songs/new', {
	  	templateUrl: "partials/song-form.html",
	  	controller: 'addSongCtrl as addMusic'
	  })
	  .when('/songs/detail', {
	  	templateUrl: "partials/song-detail.html",
	  	controller: 'SongDetailCtrl as songDetail'
	  })
    .when('/songs/brief', {
      templateUrl: "partials/song-brief.html",
      controller: 'SongForm'
    })
}]);

// app.factory('song_service', function($http, $q) {
// 	var songList = [];
	
//   function init() {
//     return $q(function(resolve, reject) {
//     $http
//       .get('/songs.json')
//       .success(
//         function(objectFromJSONFile) {
//           songList = objectFromJSONFile.songs;
//           resolve(songList)
//         },function(error) {
//           reject(error);
//         }
//       );
//     });
//   }

//   init();

//   function getSongs(){
//     return songList;
//   }

//   function getSingleSong(id) {
//     return songList.filter(function(song){
//       return song.id === id;
//     })[0];
//   }

//   function addSong(songObj) {
//     songList.push(songObj);
//     return songList;
//   }

//   return {
//     getSongs: getSongs,
//     getSingleSong: getSingleSong,
//     addSong: addSong
//   };
// }); //end factory


app.controller("SongListCtrl",
  [
    "$firebaseArray",
    function( $firebaseArray ) {
    	var ref = new Firebase('https://music-historyjtmp.firebaseio.com/songs')
      // get initial list of songs on page load
      this.songs_list = $firebaseArray(ref);
      console.log(this.songs_list);
    }
  ]
);

app.controller("addSongCtrl",
  [   
    "$firebaseArray",
    function( $firebaseArray ) {
    var ref = new Firebase('https://music-historyjtmp.firebaseio.com/songs')
    this.songs = $firebaseArray(ref);
    this.newSong = {};

      this.addSong = function() {
        this.songs.$add({
          artist: this.newSong.artist,
          title: this.newSong.title,
          album: this.newSong.album,
          year: this.newSong.year
          console.log(this.newSong)
        });
      };
    }
  ]
);

app.controller('SongDetailCtrl',
  [
    "$firebaseArray",
    function($routeParams, $firebaseArray) {
    	this.selectedSong = {};
      this.songId = $routeParams.songId;

      var ref = new Firebase("https://nss-nc02-ng-music.firebaseio.com/songs");
      this.songs = $songsArray(ref);
      this.songs.loaded()
        .then(function() {
        	this.selectedSong = $scope.songs.$getRecord(this.songId);
        }.bind(this))
        .catch(function(error) {
        console.log("Error:", error);
        });

    }
  ]
)




// app.controller('SongListCtrl', function($scope) {
//   $.ajax('songs.json')
//   .done(function(ajaxSongs) {
//   	console.log("ajax")
//   	$scope.songs = ajaxSongs.songs;
//   	console.log(ajaxSongs.songs);
//   	$scope.$apply();
//   })
//   .fail(function(error) {
//   	console.log("error", error)
//   });
// });