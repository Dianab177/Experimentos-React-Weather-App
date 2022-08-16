import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../Styles/WeatherForecast.css";

const WeatherForecatsDay = (props) => {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
      <div className="container-day rounded-3 p-2">
        <div className="WeatherForecast">{day()}</div>
        <div className="iconForecast">
          <WeatherIcon
            code={props.data.weather[0].icon}
            size={100}
            className="forecastIcon"
          />
        </div>
        <div className="WeatherForecastTemperature">
          <span className="WeatherForecastTemperature-max">
            {maxTemperature()}
          </span>
          <span className="WeatherForecastTemperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
  );
};

export default WeatherForecatsDay;
