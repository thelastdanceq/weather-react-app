import React, { useEffect, useMemo, useState } from 'react'
import { getData } from '../api'
import DaysList from './DaysList';

export default function Forecast() {
    const [days, setdays] = useState([]);
    const now = useMemo(() => {
        return new Date();
    }, [])

    useEffect(() => {
        Promise.all([
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 1),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 2),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 3),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 4),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 5),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 6)
        ]
        ).then(data => setdays(data.map(item => {
            return item.forecast.forecastday[0];
        })))
    }, [now])

    return (
        !days.length ? <h1>Loading..</h1> : <DaysList days={days} />
    )
}
