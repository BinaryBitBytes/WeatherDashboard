//api key openweathers 5fbe45de6f75b2400e38d4b9d10635a3
/*Current Weather Geocoding API //REVERSE GEOCODING
//https://openweathermap.org/api/geocoding-api#reverse // resource
http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
*/

/*coord
coord.lon City geo location, longitude
coord.lat City geo location, latitude*/

/**WHEN I view current weather conditions for that city 
**THEN I am presented with the city name, the date, an icon representation of weather conditions,
*!the temperature, the humidity, the wind speed, and the UV index
*?"name": "City of London",   //<------ MVP item CITY NAME
* TODO: "lat": 51.5128,
*@param thisParam"lon": -0.0918,
/////USE ONE-CALL-API// SOURCE///https://openweathermap.org/api/one-call-api
"current": {
    "dt": 1618317040,   //<---Times of data receive in UNIX GMT time. find a way to convert unix time stamp 
    "temp": 284.07,     //<----- Temp needs to be converted to imperial (kelvin to Farenheit)
    "humidity": 62,  //<------ MVP item HUMIDITY
    "uvi": 0.89,     //<------ MVP item UV index
    "wind_speed": 6,  //<------ MVP item WIND_SPEED
    "weather": [ ** More Weather Data //<--- icon weather conditions ~~
~~~~~~~~~~~~~
current.rain (where available) Precipitation volume, mm
current.snow (where available) Snow volume, mm
current.weather
current.weather.id Weather condition id
current.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
current.weather.description Weather condition within the group (full list of weather conditions). Get the output in your language
current.weather.icon Weather icon id. How to get icons
~~~~~~~~~~~~~~
/*Current Weather Data
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*/

/*
? resource link https://openweathermap.org/forecast5
*FUTURE WEATHER DATA
!5-day forecast::[date]::[WeatherIcon]::[Temperature]::[WindSpeed]::Humidty
* TODO: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
!5-day-forecast: catogory
!list.dt <--- Time date List
!list.weather.icon <--- Weather Icon
!list.main.temp <---- Temperature !! NEEDS TO BE IMPERIAL!
!list.wind.speed <---- Wind Speed !! NEEDS TO BE IMPERIAL!
!list.main.humidity
*/

/*
*@param addEventListener
*/