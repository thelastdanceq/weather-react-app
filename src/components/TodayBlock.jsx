import React from 'react'
import icon from "../assets/icons/Group 683.png"

export default function TodayBlock() {
    return (
        <div className='today'>
            <img src={icon} alt="dsaad" height={100} width={150} />
            <p className='temp'>27<sup>&deg;C</sup></p>
            <p className='date'>17th Jun 21</p>
            <p className="time">Thursday 2:45 am</p>
            <div className="stats">
                <div className="wind">
                    <i></i>
                    <p>Wind</p>
                    <p>10 km/h</p>
                </div>
                <div className="humidity">
                    <i></i>
                    <p>Hum</p>
                    <p>54 %</p>
                </div>
                <div className="rain-percents">
                    <i></i>
                    <p>Rain</p>
                    <p>0.2 %</p>
                </div>
            </div>
        </div >
    )
}
