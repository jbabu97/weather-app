const searchBtn = document.getElementById('search_btn').addEventListener('click', function () {
    getWeatherInfo();

    document.getElementById('search_city').value = '';
});

document.getElementById('search_city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
})

const getWeatherInfo = () => {
    const searchCity = document.getElementById('search_city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=91b808bebc9277d11412840060c70169`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
		const statusIcon = data.weather[0].icon;
		document.getElementById('status_icon').src=`https://openweathermap.org/img/wn/${statusIcon}@2x.png`;
        const city = data.name;
        document.getElementById('city_name').innerText = city;
        const temperature = data.main.temp - 273.15;
        const temperatureFixed = temperature.toFixed(2);
        document.getElementById('temperature').innerText = temperatureFixed;
        const status = data.weather[0].main;
        document.getElementById('status').innerText = status;
    })
};

