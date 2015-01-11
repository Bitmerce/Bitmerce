'user strict';
app.service("Database", [ , function() {

	var collection = new TestCollection();
	
	this.fetch = function() {
		collection.fetch({
		  success: function(collection) {
		    collection.each(function(object) {
		      console.warn(object);
		    });
		  },
		  error: function(collection, error) {
		    // The collection could not be retrieved.
		  }
	});


	}



}])






