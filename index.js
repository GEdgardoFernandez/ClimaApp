const keyAPI = "69b51fd13e96589445a76e1ac7671b2a";
var valorTemp = document.getElementById(temp-valor);
var tempDesc = document.getElementById(temp-desc);
var ubi = document.getElementById(ubication);
var icono = document.getElementById(inimation);
var velocidadViento = document.getElementById(wind-speed);
window.addEventListener('load', () =>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            var latitude = posicion.coords.latitude;
            var longitude = posicion.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}$&lon=${longitude}&appid=${keyAPI}`;
            const city = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`
        });
    }
});