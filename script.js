// variables for the city/weather search
var city="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUVindex= $("#uv-index");
var listCity=[];

// searches the city
function find(c){
    for (var i=0; i<listCity.length; i++){
        if(c.toUpperCase()===listCity[i]){
            return -1;
        }
    }
    return 1;
}
//My API Key
var APIKey="3a93b214ee188854c388c13ef495f74c";

//Function to show the results 
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city){
    
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

        //URL to get the weather image
        var weatherIcon= response.weather[0].icon;
        var iconURL="https://openweathermap.org/img/wn/"+weatherIcon +"@2x.png";
        var date=new Date(response.dt*1000).toLocaleDateString();
        
        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconURL+">");
       
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(currentTemperature).html((tempF).toFixed(2)+"&#8457");
        
        $(currentHumidty).html(response.main.humidity+"%");
        
        var ws=response.wind.speed;
        var windsmph=(ws*2.237).toFixed(1);
        $(currentWSpeed).html(windsmph+"MPH");
        
       