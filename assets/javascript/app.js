// Initial array of Gif Prompts
var animals = ["dog", "cat", "fish", "lion"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayGifInfo() {

    $("#gif-view").empty();

    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=zHaASV4aVVF4j94mdrYaqKKNZFQbTsQh";

    // Creating an AJAX call for the specific Gif button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data[1]);
        //  Creating a div to hold the Gif
        const gifs = response.data;
        gifs.forEach(function(gif){
            var gifDiv = $("<div class='gif col-md-3'>");
            // Retrieving the URL for the Gif
            var imgURL = gif.images.original.url;
            // Creating an element to hold the Gif
            var image = $("<img class='img-fluid img-thumbnail'>").attr("src", imgURL);
            // Appending the Gif
            gifDiv.append(image);
            // Putting the entire Gif above the previous Gifs
            $("#gif-view").prepend(gifDiv);
        })
    });

};

// Function for displaying Gif data
function renderButtons() {

    // Deleting the Gif Prompts prior to adding new Gifs
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of Gif Prompts
    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each Gif in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of gif-btn to our button
        a.addClass("gif-btn btn btn-primary btn-lg");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where a gif button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();
    // Adding gif from the textbox to our array
    animals.push(gif);
    // Calling renderButtons which handles the processing of our gif array
    renderButtons();
});

// Adding a click event listener to all elements with a class of ".gif-btn"
$(document).on("click", ".gif-btn", displayGifInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();