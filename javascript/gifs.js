//Global Variables 
var topics = ["mecury", "Venus", "Earth", "Mars", "Saturn", "space x", "nasa"];


//Functions 

//print buttons 

function printButtons(){

	//delete content 
	$("#spaceButtons").html("");

	for (i=0; i<topics.length; i++){
		$("#spaceButtons").append("<button type='button' class='btn btn-primary'>" + topics[i] + "</button>");

	}
}

	 // This function handles events where the add movie button is clicked
      $("#add-space").on("click", function(event) {
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
         var newButton = $("#space-input").val();
        // Write code to add the new movie into the movies array

        topics.push(newButton);
        
        $('#space-input').val('')

        // The renderButtons function is called, rendering the list of movie buttons
        printButtons();
      });


//Main Process 

printButtons();