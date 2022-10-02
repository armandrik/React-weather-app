import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../state-management/actions/weatherActionThunk';
import { City } from './city-info/City';
import { Date } from './date-time/Date';
import { DailyForcast } from './forcast/DailyForcast';
import { HighLow } from './high-low/HighLow';
import { Search } from './search-session/Search';
import { WeatherInfo } from './weather-info/WeatherInfo';


export const Weather = () => {

  const dispatch = useDispatch()
  const data = useSelector(store => store.weatherThunkReducer.items[0])
  const [cityValue, setCityValue] = React.useState('london')
  const [isLoading, setIsLoading] = React.useState(true)

  const axiosCity = (name) => {
    setCityValue(name)
  }

  React.useEffect(() => {
    (async () => {
      getData(dispatch, cityValue)
      setIsLoading(false)
    })();
  }, [cityValue])

  return (
    <div className='weather-conatiner'>
      {isLoading ? <h1 className='loading'>loading . . . <div className="loader"></div></h1> :
        <>
          <Search cityValue={axiosCity} />
          <Date country={data.city.country} />
          <City city={data.city.name} country={data.city.country} describe={data.list[0].weather[0].main} temp={data.list[0].main.temp}/>
          <WeatherInfo
            temp={data.list[0].main.temp}
            icon={data.list[0].weather[0].icon}
            felt={data.list[0].main.feels_like}
            humidity={data.list[0].main.humidity}
            wind={data.list[0].wind.speed}
            describtion={data.list[0].weather[0].description}
          />
          <HighLow rise={data.city.sunrise} set={data.city.sunset} high={data.list[0].main.temp_max} low={data.list[0].main.temp_min} timeZone={data.city.timezone} />
          <DailyForcast info={data.list} />
        </>
      }
    </div>
  )
}