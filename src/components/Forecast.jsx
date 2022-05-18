import React, { useEffect, useMemo, useState, useContext } from 'react'
import { getData } from '../api'
import DaysList from './DaysList';
import { context } from '../context';


export default function Forecast() {
    const [days, setdays] = useState([]);
    const contextCity = useContext(context)
    const now = useMemo(() => {
        return new Date();
    }, [])


    useEffect(() => {
        Promise.all([
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 1, contextCity.search),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 2, contextCity.search),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 3, contextCity.search),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 4, contextCity.search),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 5, contextCity.search),
            getData(now.getFullYear(), now.getMonth() + 1, now.getDate() + 6, contextCity.search)
        ]
        ).then(data => setdays(data.map(item => {
            return item.forecast.forecastday[0];
        })))
    }, [now, contextCity.search])

    return (
        !days.length ? <h1>Loading..</h1> : <DaysList days={days} />
    )
}
