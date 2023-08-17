const apiKey = "229b041c48c191ffa47f8379628740df";
const city =""
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&`;
const btn = document.querySelector('.searcher__icon');
const defaultCity = "Poznan"; 

async function checkWeather(city) {

    const response = await fetch(apiUrl + `q=${city}` +`&appid=${apiKey}`);
    var data = await response.json();
   if(data.cod === 200)
   {
    const cityName = document.querySelector('.weather__city');
    cityName.textContent = data.name;
    const temperature = document.querySelector('.temperature__value');
    temperature.textContent = data.main.temp;
    const humidity = document.querySelector('.humidity__var');
    humidity.textContent = data.main.humidity;
    const wind = document.querySelector('.wind__var');
    wind.textContent = data.wind.speed;
    console.log(data)
    const icon = document.querySelector('.weather__icon');
    const iconName = data.weather[0].main.toLowerCase();
    icon.src = `assets/` + iconName +`.png`;



   }
   else {
    alert('Podaj prawidłową nazwę miasta')
   }
    
    
}
btn.addEventListener('click', () => {
    const input = document.querySelector('.searcher__input')
    const city = input.value;
    if (city.length !== 0) {
        checkWeather(city);
    } 
    else {
        alert('Podaj miasto')
    }
});

window.addEventListener('load', () => {
    checkWeather(defaultCity);
});
