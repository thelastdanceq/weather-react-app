import React from 'react'
import TodayBlock from './TodayBlock'
import Forecast from './Forecast'

export default function ManPanel() {
  return (
    <div className='main-panel'>
      <TodayBlock />
      <Forecast />
    </div>
  )
}
