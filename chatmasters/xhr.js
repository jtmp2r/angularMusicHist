var Chatty = (function() {
	var chatCall = [];

	return {
		loadChat: function() {
			var chatter = new XMLHttpRequest();


			chatter.addEventListener("load", function() {
				chatCall = JSON.parse(this.responseText).messages;
				console.log("messages", chatCall);

			});

			chatter.open("GET", messages.json);
			chatter.send();
		};
	}
}())