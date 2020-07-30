$(document).ready(function(){

  $(".btn").on("click", function(){
      var cityTerm = $("#city-input").val();

      console.log(cityTerm)


    searchWeather(cityTerm)
  });
function searchWeather(searchTerm) {
  var apiKey = "e08e1b5f76b568cf56d350fb8f8b2436";

  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + apiKey + "&units=imperial",
    dataType: "json",
    success: function(currentWeatherData) {
      console.log(currentWeatherData)
      //generate html here

      var card = $("<div>").addClass("card");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h2>").addClass("card-title").text(currentWeatherData.name);
      var temp = Math.round(currentWeatherData.main.temp);
      console.log(temp);
      var tempEl = $("<h4>").addClass("card-text").text(temp + String.fromCharCode(176))


      $("#today").append(card.append(cardBody.append(cardTitle, tempEl)))

      // getForecast(currentWeatherData.coord.lat, currentWeatherData.lon)
    }
  })
}
function getForcast(){

}


});


