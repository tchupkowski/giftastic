//Global Variables 
var topics = ["mecury", "Venus", "Earth", "Mars", "Saturn", "space x", "nasa"];


//Functions 

//print buttons 
function printButtons(){

	//delete content 
	$("#spaceButtons").html("");

	for (i=0; i<topics.length; i++){

		$("#spaceButtons").append("<button type='button' data-spaceP='fish' class='btn btn-primary'>" + topics[i] + "</button>");


	}
}

// This function handles events where the add space button is clicked
$("#add-space").on("click", function(event) {
	// event.preventDefault() prevents submit button from trying to send a form.
	// Using a submit button instead of a regular button allows the user to hit
	// "Enter" instead of clicking the button if desired
	event.preventDefault();

	// grab the text the user types into the input field
	 var newButton = $("#space-input").val();
	
	// add the new movie into the movies array
	topics.push(newButton);

	//clear form 
	$('#space-input').val('')

	// rendering the list of movie buttons
	printButtons();
});


//this function returns gifs depending on which button you push 
$(document).ready(function() {

$("button").on("click", function() {
      

      var spaceP2 = $(this).data("spaceP");
      console.log($(this).data("spaceP"));
      
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        spaceP2 + "&api_key=dc6zaTOxFJmzC&limit=10";
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            $("#space-gifs").prepend(gifDiv);
          }
        });
    });
});

//Main Process 

printButtons();