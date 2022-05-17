import React from 'react'
import DaysItem from './DaysItem'

export default function DaysList({ days }) {
    return (
        <div className="forecast days list">
            {
                days.map(day => {
                    return <DaysItem key={day.date_epoch} day={day} />
                })
            }
        </div>
    )
}
