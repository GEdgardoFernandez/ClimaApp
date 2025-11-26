const keyAPI = "1a6a365ecaa3426d974154842251711";
const img = "recursos/iconos/sol94.png";
const pais = document.getElementById('country').value;
const provincia = document.getElementById('provincia').value;
const ciudad = document.getElementById('city').value;
const lang = document.getElementById('lang').value;
const change = document.getElementById('formChange').action;
console.log(pais, provincia, ciudad, change, lang);
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log(posicion)
            let lat = posicion.coords.latitude;
            let lon = posicion.coords.longitude;
            let lang = document.getElementById('lang').value;
            const urlapi = `https://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${lat},${lon}&lang=${lang}`;

            fetch(urlapi)
                .then(Response => { return Response.json() })
                .then(datosClima => {
                    console.log(datosClima)
                    const name = datosClima.location.name;
                    const region = datosClima.location.region;
                    const country = datosClima.location.country;
                    const temp = datosClima.current.temp_c;
                    const condition = datosClima.current.condition.text;
                    const winddir = datosClima.current.wind_dir;
                    const windkph = datosClima.current.wind_kph;
                    const icon = datosClima.current.condition.icon;

                    document.getElementById('animation').src = `https:${icon}`;

                    document.getElementById('tempValor').textContent = temp;
                    document.getElementById('tempDesc').textContent = condition;
                    document.getElementById('ubication').textContent = `${name}, ${region}, ${country}`;
                    document.getElementById('windSpeed').textContent = windkph;
                    document.getElementById('windir').textContent = winddir;

                })

        })
    }
})

