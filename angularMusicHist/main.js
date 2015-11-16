var app = angular.module("musicHistory", ['ngRoute', 'firebase'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	  .when('/songs/list', {
	  	templateUrl: "partials/song-list.html",
	  	controller: 'SongListCtrl'
	  })
	  .when('/songs/new', {
	  	templateUrl: "partials/song-form.html",
	  	controller: 'addSongCtrl'
	  })
	  .when('/songs/new', {
	  	templateUrl: "partials/song-detail.html",
	  	controller: 'SongDetailCtrl'
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
    "$scope",
    "$firebaseArray",
    function($scope, $firebaseArray ) {
    	var ref = new Firebase('https://music-historyjtmp.firebaseio.com/songs')
      // get initial list of songs on page load
      $scope.songs_list = $firebaseArray(ref);
      console.log($scope.songs_list);
    }
  ]
);

app.controller("addSongCtrl",
  [
    "$scope",
    "$firebaseArray",
    function($scope, $firebaseArray ) {
    var ref = new Firebase('https://music-historyjtmp.firebaseio.com/')
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = {};

      $scope.addSong = function() {
        firebaseArray.addSong({
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album,
          year: $scope.newSong.year
        });
      };
    }
  ]
);

app.controller('SongDetailCtrl',
  [
    "$scope",
    "$firebaseArray",
    function($scope, $routeParams, $firebaseArray) {
    	$scope.selectedSong = {};
      $scope.songId = $routeParams.songId;

      var ref = new Firebase("https://nss-nc02-ng-music.firebaseio.com/songs");
      $scope.songs = $songsArray(ref);
      $scope.songs.loaded()
        .then(function() {
        	$scope.selectedSong = $scope.songs.$getRecord($scope.songId);
        })
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