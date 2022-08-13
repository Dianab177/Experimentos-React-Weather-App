import React from 'react';
import FormattedDate from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from './WeatherTemperature';


const WeatherInfo = (props) => {
  return (
    <div>
         <h1>{props.data.city}</h1>
    <ul>
      <li><FormattedDate date={props.data.date}/></li>
      <li className='text-capitalize'>{props.data.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix d-flex">
            <div className="d-inline-block">
            <WeatherIcon code={props.data.icon} size={48}/>
            </div>
        <div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
       </div>
      </div>
      <div className="col-6">
        <ul>
          <li className='description'>Humidity: {props.data.humidity}%</li>
          <li className='description'>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default WeatherInfo