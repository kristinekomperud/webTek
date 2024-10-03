function fetchW(place, latitude, longitude) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }
            return response.json();
        })
        .then((data) => {
            const article = document.getElementById(place); 
            if (article) {
                const body = article.querySelector('.data'); 
                body.innerHTML = `Temperature: ${data.current_weather.temperature} ${data.current_weather_units.temperature} <br>
                                  Weather Code: ${data.current_weather.weathercode} ${data.current_weather_units.weathercode} <br>
                                  Time: ${data.current_weather.time} ${data.current_weather_units.time} <br>
                                  Wind Direction: ${data.current_weather.winddirection} ${data.current_weather_units.winddirection} <br>
                                  Wind Speed: ${data.current_weather.windspeed} ${data.current_weather_units.windspeed}`;
            }
        })
        
}

function UpWeather() {
    fetchW("Japan", 36.20, 138.25);
    fetchW("London", 51.50, -0.12);
    fetchW("Spania", 38.34, -0.49);
    fetchW("Island", 64.39, -19.07);
    fetchW("Antarktis", -80.05, -6.21);
    fetchW("Mali", 17.47, -0.34);
}


UpWeather();


setInterval(UpWeather, 10000);  

