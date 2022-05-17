import React, { useEffect, useState } from 'react'
import { getAstroData } from "../api"
export default function Hours() {
    const [astro, setAstro] = useState({})
    useEffect(() => {
        getAstroData().then(data => setAstro(data.astronomy.astro));
    }, [])
    return (
        astro.length === 0 ? <h1>loading</h1> :
            <div className='hours' >
                <div className='sunrise'>
                    <p className='text-p' >Sunrise</p>
                    <div className="sunrise-clocks">
                        <p>{astro.sunrise}</p>
                        <p>{astro.sunset}</p>
                    </div>

                </div>
                <div className='sunset'>
                    <p className='text-p'>Moonrise</p>
                    <div className="sunset-clocks">
                        <p>{astro.moonrise}</p>
                        <p>{astro.moonset}</p>
                    </div>

                </div>
            </div >
    )
}
