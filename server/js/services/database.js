'user strict';
app.service("Database", function() {


var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();
var query = new Parse.Query(GameScore);

this.setObject = function() {
	gameScore.set("score", 1337);
	gameScore.set("playerName", "Sean Plott");
	gameScore.set("cheatMode", false);
	 
	gameScore.save(null, {
	  success: function(gameScore) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + gameScore.id);
	  },
	  error: function(gameScore, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});
}

this.fetchObject = function() {

	query.find({
	  success: function(results) {
	    console.log("Successfully retrieved " + results.length + " scores.");
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	      console.log(object.id + ' - ' + object.get('playerName'));
	    }
	  },
	  error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	  }
	});
}


 /*
*/




/*
 setInterval(function(){


},5000);
*/


});






