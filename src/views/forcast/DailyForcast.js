import React from 'react'
import { UilLocationArrow } from "@iconscout/react-unicons";

export const DailyForcast = ({ info }) => {

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkDay = (days) => {
        const d = new Date();
        if (days + d.getDay() > 6) {
            return days + d.getDay() - 7;
        } else {
            return days + d.getDay();
        }
    }

    const forcast = info.slice(1, 9)

    return (
        <>
            <h1 className='forcast-title'>Daily Forcast</h1>
            <div className='forcast-container'>
                {forcast.map((item , index) => {
                    return <div className='forcast' key={index}>
                        <p>{week[checkDay(index)]}</p>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='forcast-img' />
                        <p>{item.main.temp.toFixed(0) - 273}°</p>
                        <span className='wind-forcast'><UilLocationArrow size={12}/> {Math.round(item.wind.speed * 3 / 6)} km/h</span>
                    </div>
                })}
            </div>
        </>
    )
}
