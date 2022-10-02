import React from 'react'
import { DateTime } from "luxon";
import { UilSun, UilSunset, UilArrowUp, UilArrowDown } from "@iconscout/react-unicons";

export const HighLow = ({ rise, set, high, low, timeZone }) => {

    const formatToLocalTime = (
        secs,
        zone,
        format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

    const currentHigh = high - 273;
    const currentLow = low - 273;

    return (
        <div className='high-low-container'>
            <p>
                <UilSun />
                Rise: {formatToLocalTime(rise, timeZone, "hh:mm a")}
            </p>
            <span className='hide-span'>|</span>
            <p>
                <UilSunset />
                Set: {formatToLocalTime(set, timeZone, "hh:mm a")}
            </p>
            <span className='hide-span'>|</span>
            <p>
                <UilArrowUp />
                High: {currentHigh.toFixed(0)}°
            </p>
            <span className='hide-span'>|</span>
            <p>
                <UilArrowDown />
                Low: {currentLow.toFixed(0)}°
            </p>
        </div>
    )
}
