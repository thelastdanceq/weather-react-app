import React, { useEffect, useState } from 'react'
import { getDataOfQuality } from '../api'
import { getQualityOfAir, getQualityOfDefra } from '../helpful'

export default function Quality() {
  const [quality, setQuality] = useState({})
  useEffect(() => {
    getDataOfQuality().then(data => {
      setQuality(data.current.air_quality)
    })
  }, [])
  return (
    <div className='quality'>
      <div className="air-qual">
        <p className='text-p'>Air quaility</p>
        <progress min='1' max='5' value={quality["us-epa-index"]}>{ }</progress>
        <p>{getQualityOfAir(quality["us-epa-index"])}</p>

      </div>

      <div className="polut">
        <p className='text-p'>Polution</p>
        <progress min="0" max="100" value={quality["gb-defra-index"]}> </progress>
        <p>{getQualityOfDefra(quality["gb-defra-index"])}</p>

      </div>

    </div>
  )
}
