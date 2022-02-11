function search(citySearched){
    //key =&appid=5fbe45de6f75b2400e38d4b9d10635a3
    /*var ROOTURLdata= 'http://api.openweathermap.org/geo/1.0/direct?' //!'https://api.openweathermap.org/data/2.5/onecall?';
    var searchUrl =(ROOTURL+searchCityUrl+uvIndexUrl);
    var searchCityUrl =;
    var view5dayUrl='&';
    var currentConditionsUrl=current ;*/
    
    //!var reqDirectGeoUrl= 'http://api.openweathermap.org/geo/1.0/direct?';
    //var cityEntered= document.getElementById('citySearch').addEventListener(searchBtn, function(){console.log("meow")  ; });
    function getCity(){
        const city= document.querySelector('input.cityForm').value;
        let cityString =JSON.stringify(city);
        console.log(cityString);
        return cityString;
    }
    console.log(getCity()+"AAAA");
    //!const list = [''];
    var citySearched = document.getElementById('citySearchInput').value;
    citySearchedString = JSON.stringify(citySearched)
    console.log(citySearched);
    //!const cityList = document.querySelector(".listCity");
    document.getElementById('listCity').append(citySearched);
    const list= ['']
    //var list= cityList.appendChild(listNew('listCity'));
}
//var citySearched = document.getElementById('citySearch').value;//.addEventListener('submit', function(){console.log("meow")  ; });
document.getElementById('searchBtn').addEventListener('click', function(){ console.log(citySearched); });
//location for query
var requestUrl="http://api.openweathermap.org/geo/1.0/direct?";  // declaring the var  to request the URL needed for the fetch. WRAP URL in QUOTES
var uvIndexUrl = '&daily.uvi';
var citySearchInput= 'q='+citySearchedString;
var key = '&appid=5fbe45de6f75b2400e38d4b9d10635a3';
var fetch = fetch(requestUrl+citySearchInput+uvIndexUrl+key);
then(function(response){ //.then means next step
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

*!!!!!!!! EXAMPLE!!!!!!!!!
*!//let url = new URL('https://example.com?foo=1&bar=2');
*!//let params = new URLSearchParams(url.search);
*!//Add a second foo parameter.
*!//params.append('foo', 4);
*!//Query string is now: 'foo=1&bar=2&foo=4'


// Data for query*/

//TODO:var ROOTURLdata= 'https://api.openweathermap.org/data/2.5/onecall?';
//TODO:var searchUrl =(ROOTURL+searchCityUrl+uvIndexUrl);
//TODO:var searchCityUrl =;
//TODO:var uvIndexUrl = '&daily.uvi';
//TODO:var view5dayUrl='&';
//TODO:var currentConditionsUrl=current ;
