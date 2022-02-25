var cityName = ''; 
var stateName= '';
var que = 'Atlanta';
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

    getCity();
    console.log(getCity());
    //!const list = [''];
    var citySearched = document.getElementById('citySearchInput').value;
    //citySearchedString = JSON.stringify(citySearched)
    que = citySearched;
    console.log(citySearched);
    //!const cityList = document.querySelector(".listCity");
    document.getElementById('listCity').append(citySearched);
    cityName =  citySearched;
    //var list= cityList.appendChild(listNew('listCity'));
}
document.getElementById('searchBtn').addEventListener('click', function(){ console.log(cityName); });


var container= document.getElementById('');
var searchButton = document.getElementById('searchBtn');


//! This function getApi builds our URL query for the api call. 
function getApi(){ //
    //!This function uses requestUrl to utilize the base url for geocoding part of the weather api
    var requestUrl='https://api.openweathermap.org/geo/1.0/direct?q='  // declaring the var  to request the URL needed for the fetch. WRAP URL in QUOTES
    //var uvIndexUrl = '&daily.uvi';
    //! CURRENTLY: still working with the citySearchInput to get current geo location and append the search from user to define search parameter
    var citySearchInput= que;
    //! The key of this function from my account to use calls on the Weather api
    var key = '&appid=5fbe45de6f75b2400e38d4b9d10635a3';

    //! this fetch assembles the URL query, as of right now it has 3 parameters: requestUrl [base url], citySearchInput[AKA var que], and the user key
    fetch(requestUrl+citySearchInput+key) //+uvIndexUrl
    //! use .then to move into the function(load) && console log load
    .then (function (load){ //
        console.log(load); //
        
        for (var i=0; i<load.length; i++){ //
            var city= document.createElement()//
            var state= document.createElement()//
            city.textContent = load[i].city.state;
            state.textContent= load[i].name;
            container.append(city);
            container.append(state);

        }
    });
}
searchButton.addEventListener('click', getApi());

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
