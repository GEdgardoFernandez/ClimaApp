const keyAPI = "";

var valorTemp = document.getElementById(tempValor);
var tempDesc = document.getElementById(tempDesc);
var ubi = document.getElementById(ubication);
var icono = document.getElementById(animation);
var velocidadViento = document.getElementById(windSpeed);

window.addEventListener('load', ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log(posicion)
            var lat = posicion.coords.latitude;
            var long = posicion.coords.longitude;

            const urlapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}$&lon=${long}&appid=69b51fd13e96589445a76e1ac7671b2a`;
            //const city = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`

            fetch(urlapi)
            .then(Response =>{return Response.json()})
            .then(datosClima =>{
                console.log(datosClima)
                var temperature = Math.round(datosClima.main.temp)
                valorTemp.textContent = `${temperature} °C`
                var desc = datosClima.weather[0].description;
                tempDesc.textContent = desc.toUpperCase();
                ubi.textContent = datosClima.name;
                velocidadViento.textContent = `${datosClima.wind.speed} M/S`

            })

        })
    }
})