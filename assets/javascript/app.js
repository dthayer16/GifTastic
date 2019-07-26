// Initial array of movies
var animals = ["dog", "cat", "fish", "lion"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayGifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + gif + "&apikey=trilogy";

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=zHaASV4aVVF4j94mdrYaqKKNZFQbTsQh";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // //  Creating a div to hold the movie
        //  var gifDiv = $("<div class='gif'>");

        //  // Storing the rating data
        //  var rating = response; 

        //  // Creating an element to have the rating displayed
        //  var pOne = $("<p>").text("Rating: " + );

        //  // Displaying the rating
        //  gifDiv.append(pOne);

        //  // Storing the release year
        //  var released = response.Released;

        //  // Creating an element to hold the release year
        //  var pTwo = $("<p>").text("Released: " + );

        //  // Displaying the release year
        //  gifDiv.append(pTwo);

        //  // Storing the plot
        //  var plot = response. ;

        //  // Creating an element to hold the plot
        //  var pThree = $("<p>").text("Plot: " + );

        //  // Appending the plot
        //  gifDiv.append(pThree);

        //  // Retrieving the URL for the image
        //  var imgURL = response.;

        //  // Creating an element to hold the image
        //  var image = $("<img>").attr("src", imgURL);

        //  // Appending the image
        //  gifDiv.append(image);

        //  // Putting the entire movie above the previous movies
        //  $("#gif-view").prepend(gifDiv);
    });

};

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("gif-btn btn btn-primary btn-lg");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where a movie button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();

    // Adding movie from the textbox to our array
    animals.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".gif-btn", displayGifInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();