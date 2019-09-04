$(document).ready(function () {
    var videogames = ["Halo: Combat Evolved", "Halo 2", "Halo 3", "Fuzion Frenzy", "Grand Theft Auto: San Andreas", "Fable", "Amped", "Amped 2", "Fight Night Champion"];
    // add buttons for the videogames array
    function renderButtons() {
        $("#videogame-buttons").empty();
        for (i=0; i < videogames.length; i++) {
            $("#videogame-buttons").append("<button class='btn btn-success' data-videogame='" + videogames[i] + "'>" + videogames[i] + "</button>");
        }
    }
    // run the reder function
    renderButtons();
    // add the button from the user input
    $("#add-videogame").on("click", function () {
        event.preventDefault();
        var videogame = $("#videogame-input").val().trim();
        videogames.push(videogame);
        renderButtons();
        return;
    });
});