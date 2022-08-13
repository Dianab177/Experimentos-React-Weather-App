import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


const WeatherIcon = (props) => {
  const codeMappping = {
"01d": "CLEAR_DAY",
"01n": "CLEAR_NIGHT",
"02d": "PARTLY_CLOUDY_DAY",
"02n": "PARTY_CLOUDY_NIGHT",
"03d": "PARTLY_CLOUDY_DAY",
"03n": "PARTY_CLOUDY_NIGHT",
"04d": "CLOUDY",
"04n": "CLOUDY",
"09d": "RAIN",
"09n": "RAIN",
"10d": "SLEET",
"10n": "SLEET",
"11d": "SLEET",
"11n": "SLEET",
"13d": "SNOW",
"13n": "SNOW",
"50d": "FOG",
"50n": "FOG",
}

  return (
    <ReactAnimatedWeather
    icon={codeMappping[props.code]}
    color="goldenrod"
    size= {props.size}
    animate= {true}
    />
  );
}

export default WeatherIcon
