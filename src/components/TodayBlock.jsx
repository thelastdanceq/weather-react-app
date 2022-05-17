import React, { useEffect, useState } from 'react'
import { getDailyData } from '../api'

export default function TodayBlock() {
    const [location, setLocation] = useState({})
    const [currentWeather, setCurrentWeather] = useState({})

    useEffect(() => {
        getDailyData().then(data => {
            setLocation(data.location);
            setCurrentWeather(data.current);
        });
    }, [])

    return (
        !Object.keys(currentWeather).length > 0 ? <h1>Loading...</h1> :
            <div className='today'>
                <img src={currentWeather.condition.icon} alt={currentWeather.condition.text} />
                <p className='temp'>{currentWeather.temp_c}<sup>&deg;C</sup></p>
                <p className='date'>{Date(location.localtime_epoch).split(' ').slice(1, 4).join(' ')}</p>
                <p className="time">{Date(location.localtime_epoch).split(' ')[0] + ' ' + Date(location.localtime_epoch).split(' ')[4]}</p>
                <div className="stats">
                    <div className="wind">
                        <i></i>
                        <p>Wind</p>
                        <p>{currentWeather.wind_kph}km/h</p>
                    </div>
                    <div className="humidity">
                        <i></i>
                        <p>Hum</p>
                        <p>{currentWeather.humidity}  %</p>
                    </div>
                    <div className="rain-percents">
                        <i></i>
                        <p>Rain</p>
                        <p>{currentWeather.cloud} %</p>
                    </div>
                </div>
            </div >
    )
}
