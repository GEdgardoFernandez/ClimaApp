const keyAPI = "";

let valorTemp = document.getElementById(tempValor);
let tempDesc = document.getElementById(tempDesc);
let ubi = document.getElementById(ubication);
let icono = document.getElementById(animation);
let velocidadViento = document.getElementById(windSpeed);

window.addEventListener('load', ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log(posicion)
            var lat = "-31.5375000°";
            var long = "-68.5363900°";

            const urlapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}$&lon=${long}&appid=69b51fd13e96589445a76e1ac7671b2a`;
            //const city = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`

            fetch(urlapi)
                .then(Response =>{return Response.json()})
                .then(datosClima =>{
                    console.log(datosClima)
                    var temperature = Math.round(datosClima.main.temp)
                    valorTemp.innerText = `${temperature} °C`
                    var desc = datosClima.weather[0].description;
                    tempDesc.innerText = desc.toUpperCase();
                    ubi.innerText= datosClima.name;
                    velocidadViento.innerText = `${datosClima.wind.speed} M/S`

            })

        })
    }
})