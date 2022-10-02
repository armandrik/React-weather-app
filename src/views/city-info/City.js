import React from 'react'

export const City = ({ city, country, describe , temp}) => {

    const celsius = temp - 273;

    return (
        <div className='city-info-container'>
            <h1>{city}, {country}</h1>
            <h2 className={celsius > 24 ? 'orange' : 'blue'}>{describe}</h2>
        </div>
    )
}