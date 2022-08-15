import React, { useState } from "react";
import "../Styles/Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import BackgroundDay from "./BackgroundDay";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "38a4b4ab7fe27a1d5c59088c9b79826b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8">
        <form className="search" onSubmit={handleSubmit}>
          <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-2">
                <button type="submit" className="btn btn-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="goldenrod"
                    class="bi bi-search text-center"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
              <div className="col-10">
                <input
                  type="search"
                  id="search-text"
                  className="form control border bg-warning h4 p-1 rounded-5 opacity-75"
                  placeholder="  Enter a city..."
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
            </div>
        </form>
        </div>
        <div className="col-4">
        <BackgroundDay />
        </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loding a city ...";
  }
};

export default Weather;
