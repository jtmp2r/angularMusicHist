$(document).ready(function() {
	$("#getSongs").click(function () {
	$.ajax({
	  url:"songs1.json"
	}).done(displaySongs()
    function displaySongs(songList) {
	 console.log(songList.songs);
      for (var i = 0; i < songList.songs.length; i++) {
      	var currentSong = songList.songs[i];
      	$("#list-of-songs").append("<h1>" + currentSong.title + "</h1>");
      	$("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
      	$("#list-of-songs").append("<h1>" + currentSong.title + "<h1>");
      }
	}

	$.ajax({
	  url:"songs.json"
	}).done(function(songList) {
      console.log(songList);
 });
