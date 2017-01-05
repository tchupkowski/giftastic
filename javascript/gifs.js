//problems to fix
	//all data is fish - fixed now I think this comment is hillarious so I left it 
	
	


//Global Variables 
var topics = ["high jump", "penguin", "cheezburger", "esculator", "soccer", "scooter", "Donald Trump", "fail", "robot opening door", "umbrella", "cat", "homework", "water", "meme", "mascot", "epic", "disney", "logic", "cartoon"];


//Functions 

//print buttons 
function printButtons(){

	//delete content 
	$("#spaceButtons").html("");

	for (i=0; i<topics.length; i++){

		//$("#spaceButtons").append("<button type='button' class='btn btn-primary'>" + topics[i] + "</button>");
		//$().attr("data-type", topics[i]);
		//console.log(topics[i]);

		var button = $("<button>");
		button.addClass("btn btn-primary");
		button.attr("data-type", topics[i] + " fail");
		button.text(topics[i]);
		$("#spaceButtons").append(button);
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
//$(document).ready(function() {

	$(document).on("click", ".btn-primary", function() {

//$("button").on("click", function() {

	//delete content 
	$("#space-gifs").html("");
      

      var spaceP2 = $(this).data("type");
      console.log($(this).data("type"));
      
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
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
            personImage.attr("src", results[i].images.fixed_height_still.url); 
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-animate", results[i].images.fixed_height.url); 
            personImage.attr("data-state", "still");
            personImage.attr("class", "gif");
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            $("#space-gifs").prepend(gifDiv);
          }
        });
	
});
    
//});
//this function changes animates or freezes the gifs 
//$(document).ready(function() {
	$(document).on("click", ".gif", function() {

	//$(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
//});
//Main Process 

printButtons();