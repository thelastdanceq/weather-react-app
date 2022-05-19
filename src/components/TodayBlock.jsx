import React, { useContext, useEffect, useState } from 'react'
import { getDailyData } from '../api'
import { context } from '../context'


export default function TodayBlock() {
    const [location, setLocation] = useState({})
    const [currentWeather, setCurrentWeather] = useState({})
    const contextCity = useContext(context);
    useEffect(() => {
        getDailyData(contextCity.search).then(data => {
            if ("error" in data) {
                setLocation({});
                setCurrentWeather({});
            } else {
                contextCity.setSearch(data.location.name)
                setLocation(data.location);
                setCurrentWeather(data.current);
            }
        });
    }, [contextCity])
    return (
        !Object?.keys(currentWeather).length > 0 ? null :
            <div className='today'>
                <img
                    src={currentWeather?.condition?.icon}
                    alt={currentWeather?.condition?.text}
                    width="128px"
                    height="128px" />
                <p className="location">{location?.name}, {location?.country}</p>
                <p className='temp'>{currentWeather?.temp_c}<sup>&deg;C</sup></p>
                <p className='date'>{Date(location?.localtime_epoch).split(' ').slice(1, 4).join(' ')}</p>
                <p className="time">{contextCity?.nowTime.split(' ')[0] + ' ' + contextCity?.nowTime.split(' ')[4].split(':').slice(0, 2).join(":")}</p>
                <div className="stats">
                    <div className="wind">
                        <p>Wind</p>
                        <p>{currentWeather.wind_kph}km/h</p>
                    </div>
                    <div className="humidity">
                        <p>Hum</p>
                        <p>{currentWeather.humidity}  %</p>
                    </div>
                    <div className="rain-percents">
                        <p>Rain</p>
                        <p>{currentWeather.cloud} %</p>
                    </div>
                </div>
            </div >
    )
}
