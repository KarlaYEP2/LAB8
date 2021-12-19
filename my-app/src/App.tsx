import React, {Component, useState} from "react"
import { render } from "react-dom"
let lat = 0
let lon = 0

class App extends Component {
    constructor(props: App) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude
            lon = position.coords.longitude
        })
    }
    componentDidUpdate() {
        if(!navigator.geolocation.getCurrentPosition) {
            return alert("stop")
        }
    }

    render() {
        return (
            <div className="App">
                <h4>Weather</h4>
                <div id="map">
                    <button onClick={getWeather}>get weather</button>
                    <link rel="stylesheet" href="index.css"/>

                </div>
                <React.Fragment>

                </React.Fragment>
            </div>
        )
    }
}
function getWeather() {
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts,current&appid=' + process.env.REACT_APP_API_KEY
    return fetch(url)
        .then(res => res.json())
        .then(data => showWeather(data.daily))
}

function showWeather(resp: any) {
    console.log(resp)
    let arraydata = [];
    for (let i in resp)
        arraydata.push([i, resp [i]])
    console.log(arraydata)
}




render(<App />, document.getElementById("root"));
export default App
