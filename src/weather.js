// weather.js

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=houston&appid=503d8aa0d6df5f25793a2edeb171f406


let weatherReport = document.querySelector('.weather-info');
console.log(weatherReport.textContent);

// async function getWeather(urlString) {
//     console.log('in getWeather');
//     const response = await fetch(urlString, { mode: 'cors' });
//     const weatherData = await response.json();
//     console.log(weatherData);
//     console.log(weatherData.main.temp);
//     weatherReport.textContent = weatherData.main.temp;
// }

let handleSubmit = (event) => {

    console.log('in handleSubmit');
    console.log(event.target.value);
    let cityName = event.target.value;
    console.log('cityName = ' + cityName);
    cityName = cityName.replace(' ', '+');
    const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=503d8aa0d6df5f25793a2edeb171f406`
    getWeather(urlString);
}

function initForm() {
    console.log('in initForm');
    const formElement = document.querySelector('#city-name');
    console.log(formElement);
    formElement.addEventListener('change', handleSubmit, true);
}

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded and parsed');
})

initForm();
