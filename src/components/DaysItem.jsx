import React from 'react'
import { getNameOfDAy } from '../helpful';

export default function DaysItem(props) {
    const { day } = props;

    return (
        <div className="card">
            <p>{day.day.avgtemp_c}&deg;</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{getNameOfDAy(new Date(day.date).getDay())}</p>
        </div>
    )
}
