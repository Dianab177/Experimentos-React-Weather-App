import React, { useEffect, useState } from "react";
import "../Styles/WeatherForecast.css";
import axios from "axios";
import WeatherForecatsDay from "./WeatherForecatsDay";

const WeatherForecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response.data);
  }
  function load() {
    let apiKey = "38a4b4ab7fe27a1d5c59088c9b79826b";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let urlForescat = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(urlForescat).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col m-0" key={index}>
                  <WeatherForecatsDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
};

export default WeatherForecast;
