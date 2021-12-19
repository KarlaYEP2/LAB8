import React, {Component, useState} from "react"
import { render } from "react-dom"
let lat = 0
let lon = 0
    function App() {

let [weather, setWeather] = useState([]);
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;
                    console.log(lat)
                    getWeather()
                }, () => {
                    alert ('In order for this website to function I need your location :)')
                })
            }
        }
function getWeather() {
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts,current&appid=' + process.env.REACT_APP_API_KEY
    return fetch(url)
        .then(res => res.json())
        .then(data => setWeather(data.daily))
}

function showWeather(index: number) {
    if(weather !== undefined && weather.length>0) {
        return weather[index]["weather"][0]["description"];
    }
}

        return (
            <div>
                <h4>Weather</h4>
                <div>
                    <button onClick={getLocation}>get weather</button>
                    <p>Day 0: {showWeather(0)}</p>
                    <p>Day 1: {showWeather(1)}</p>
                    <p>Day 2: {showWeather(3)}</p>
                    <p>Day 3: {showWeather(4)}</p>
                    <p>Day 4: {showWeather(5)}</p>
                </div>
            </div>
        )
    }
render(<App />, document.getElementById("root"));
export default App
