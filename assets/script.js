$(document).ready(function(){
  var city = JSON.parse(localStorage.getItem("city")) || [];
  $(".btn").on("click" , function(){
    var cityTerm = $("#city-input").val();
    if(city.indexOf(cityTerm)){
      city.push(cityTerm)
      localStorage.setItem("city", JSON.stringify(city));
    }  
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

      
    }
  }).then(function(getForecast){
    var lat = currentWeatherData.coord.lat;
    var lon = currentWeatherData.coord.lon;
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + getForecast +lat+ "&lon=" + lon + "&units=imperial&daily&appid=" + apiKey,
      dataType: "json",
      
      success: function(weekForcast){
        console.log(weekForecast)
      }

    })

  })
}



});


