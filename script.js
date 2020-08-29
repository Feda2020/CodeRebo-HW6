// variables for the city/weather search
var city="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");

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
