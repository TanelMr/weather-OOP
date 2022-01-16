//objects
const weather = new Weather("Tartu");
const ui = new UI ();

//events
const form = document.querySelector("#change-city");
form.addEventListener("submit", changeWeather)

//change weather
function changeWeather(event){
    const city = document.querySelector("#city-name").value;
    weather.changeCity(city);
    getWeather();
    document.querySelector("#city-name").value = "";
    event.preventDefault();
}

//get city weather
function getWeather(){
    weather.getWeather()
    .then (data => {
    ui.drawWeather(data);
    })
        .catch(error => console.log(error))
}

getWeather();