var arrObjects = [

	{
	  title: "Criminal/Mad Man",
	  name: "The Joker",
	  bio: "Chaos and fun are both interchangable to the Clown Prince of Crime.",
	  image: "http://www.internet451.com/wp-content/uploads/2011/05/LegendsOfTheDarkKnight50.jpg",
	  lifespan: {
	    birth: 1940,
	    death: 2016
	  }
	},


	{
	  title: "Criminal/Mad Man",
	  name: "Sweet Tooth",
	  bio: "Murdering Psycho who drives an ice cream truck.",
	  image: "https://i.ytimg.com/vi/DVo_72AlVRs/maxresdefault.jpg",
	  lifespan: {
	    birth: 1995,
	    death: 2016
	  }
	},

	{
	  title: "Psychiatrist",
	  name: "Hannibal the Cannibal",
	  bio: "Reknowned therapist and surgeron throughout the world. He developed a special taste for rare cuisine early in his life.",
	  image: "http://40.media.tumblr.com/b4af6645995ae33fe3a56d610dbd407e/tumblr_mmyi4clTTM1rawb5do1_500.jpg",
	  lifespan: {
	    birth: 1933,
	    death: 2016
	  }
	}
];

console.log("history", arrObjects);

var display = "";
for (var i = 0; i < arrObjects.length; i++) {
	display += "<div> <header>" + arrObjects[i].name + "<b />, " + arrObjects[i].title + "</header> <section>" + arrObjects[i].bio + "</section><img src=" + arrObjects[i].image + " height=250 width=250></img><footer>" + arrObjects[i].lifespan.birth + arrObjects[i].lifespan.death + "</footer></div>";
}

document.getElementById("container").innerHTML = display;


var personEl = document.getElementsByTagName("person");	

document.getElementById("container").addEventListener("click", dots);

function dots(){
	event.target.classList.add("dotted");
}

document.getElementById("container").addEventListener("click", myFunction);

function myFunction(){
	document.getElementById("box").focus();

	document.getElementById("box").addEventListener("keyup", editBio);
	var bio = event.target;

	function editBio() {
		bio.innerHTML = document.getElementById("box").value;
	};

	document.getElementById("clickMe").addEventListener("click", function() {
		bio = "";
		document.getElementById("box").value = "";
	})
}

