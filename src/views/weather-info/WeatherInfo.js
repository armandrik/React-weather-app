import React from 'react'
import { UilTemperatureHalf, UilTear, UilTornado } from "@iconscout/react-unicons";
import { ConvertTemp } from '../search-session/ConvertTemp';


export const WeatherInfo = ({ temp, icon, felt, humidity, wind, describtion }) => {

    const [metric, setMetric] = React.useState(true)

    const convertCelsius = () => {
        setMetric(true)
    }

    const convertFahrenheit = () => {
        setMetric(false)
    }

    const celsius = temp - 273;
    const fahrenheit = (celsius * 9 / 5) + 32;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    const currentFelt = felt - 273;
    const currentWind = Math.round(wind * 3 / 6)
    if (celsius > 24) {
        document.body.style = 'background: linear-gradient(to right bottom, rgb(236 159 5 / 70%), rgb(255 78 0 / 70%));';
        // document.body.style = 'background-size: 100% 104%;';
    }else if(celsius < 24){
        document.body.style = 'background: linear-gradient(to right bottom, #19bffff5, #1754ffcf);';
        // document.body.style = 'background-size: 100% 104%;';
    }

    return (
        <div className='weather-info-container'>
            <div className='icon-info-container'>
                <img src={iconUrl} />
                <p>{describtion}</p>
            </div>
            {metric ?
                <div className='convert'>
                    <h1 className='temp'>{celsius.toFixed(0)}°C</h1>
                    <ConvertTemp convertCelsius={convertCelsius} convertFahrenheit={convertFahrenheit} />
                </div>
                :
                <div className='convert'>
                    <h1 className='temp'>{fahrenheit.toFixed(0)}°F</h1>
                    <ConvertTemp convertCelsius={convertCelsius} convertFahrenheit={convertFahrenheit} />
                </div>
            }
            <div className='details'>
                <span>
                    <UilTemperatureHalf />
                    Real fell: {currentFelt.toFixed(0)}°
                </span>
                <span>
                    <UilTear />
                    Humidity: {humidity}%
                </span>
                <span>
                    <UilTornado />
                    Wind: {currentWind}km/h
                </span>
            </div>
        </div>
    )
}