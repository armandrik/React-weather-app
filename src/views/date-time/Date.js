import React from 'react'
import { DateTime } from "luxon";

export const Date = ({ country }) => {

    const date = DateTime.utc({ locale: country }).toFormat('DDDD');
    const time = DateTime.utc({ locale: country }).toFormat('tt');

    return (
        <div className='date-container'>
            <div>{date}</div>
            |
            <div>{time}</div>
        </div>
    )
}
