var container= document.getElementById('');
var searchButton = document.getElementById('searchBtn');

function getApi(){ //
    let que;
    let key= '&appid=5fbe45de6f75b2400e38d4b9d10635a3';
    var ROOTURLloc = "http://api.openweathermap.org/geo/1.0/direct?"+que+key; //
    
    fetch(ROOTURLloc) //
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