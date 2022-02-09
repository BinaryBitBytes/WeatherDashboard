//my api key = 5fbe45de6f75b2400e38d4b9d10635a3
//location for query
var requestUrl="http://api.openweathermap.org/geo/1.0/direct?&appid=5fbe45de6f75b2400e38d4b9d10635a3"  // declaring the var  to request the URL needed for the fetch. WRAP URL in QUOTES
fetch(requestUrl)
.then(function(response){ //.then means next step
    return response.json(); //.json () method is .http and we need to extract json from response
}) // usong fetch to do fetch request to server and then parse http respnse into json
.then(function(data){
    console.log(data); //returns the data from our fetch(response) and puts data in console.
})
//units=imperial //For temperature in Fahrenheit and wind speed in miles/hour
//example api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&units=imperial


/*
var ROOTURLloc= "http://api.openweathermap.org/geo/1.0/direct?"
//syntax/ q={city name},{state code},{country code}&limit={limit}&appid={API key}
var city=;
var cityName= q=city+state+"&limit=5&appid={API KEY}

// Data for query
var ROOTURLdata= 'https://api.openweathermap.org/data/2.5/onecall?';
var searchUrl =(ROOTURL+searchCityUrl+uvIndexUrl);
var searchCityUrl =;
var uvIndexUrl = '&daily.uvi';
var view5dayUrl='&';
var currentConditionsUrl=current ;
*/