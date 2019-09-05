$(document).ready(function () {
    var videogames = ["Halo: Combat Evolved", "Crash Bandicoot", "Mario Kart", "Call of Duty: Modern Warfare 2", "Grand Theft Auto: San Andreas", "Street Fighter", "Tekken", "Metal Slug", "Borderlands"];
    // add buttons for the videogames array
    function renderButtons() {
        $("#videogame-buttons").empty();
        for (i=0; i < videogames.length; i++) {
            $("#videogame-buttons").append("<button class='btn btn-success' data-videogame='" + videogames[i] + "'>" + videogames[i] + "</button>");
        }
            // using API to get gifs and putting them onto the html
    $(".btn").on("click", function() {
        console.log("Ive been clicked");
        var videogame = $(this).attr("data-videogame")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + videogame + "&api_key=qf9Z3gs9Yc97VPg2MSvT46MOnLPL0FJo&limit=10"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (snapshot) {
            var results = snapshot.data;
            $("#videogames").empty();
            for (var i=0; i <results.length; i++) {
                var videogameDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var videogameImg = $("<img>");

                videogameImg.attr("src", results[i].images.original_still.url);
				videogameImg.attr("data-still", results[i].images.original_still.url);
				videogameImg.attr("data-animate", results[i].images.original.url);
				videogameImg.attr("data-state", "still");
				videogameImg.attr("class", "gif");
				videogameDiv.append(p);
				videogameDiv.append(videogameImg);
				$("#videogames").append(videogameDiv); 
            }
        });
    });
    }
    // run the reder function
    renderButtons();
    // add the button from the user input
    $("#add-videogame").on("click", function () {
        event.preventDefault();
        var videogame = $("#videogame-input").val().trim();
        videogames.push(videogame);
        renderButtons();
        //return;
    });

    // change the state of the gif when clicked on
    function changeState() {
        var state = $(this).attr("data-state");
        var animateImg = $(this).attr("data-animate");
        var stillImg = $(this).attr("data-still");

        if (state === "still") {
            $(this).attr("src", animateImg);
            $(this).attr("data-state", "animate");
        }
        else if (state === "animate") {
            $(this).attr("src", stillImg);
            $(this).attr("data-state", "still");
        }
    }
    // run on-click to change image state
    $(document).on("click", ".gif", changeState);



});