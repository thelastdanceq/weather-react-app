import React, { useContext, useEffect, useState } from 'react'
import { getAstroData } from "../api"
import { context } from '../context'
export default function Hours() {
    const [astro, setAstro] = useState({})
    const contextCity = useContext(context);
    useEffect(() => {
        getAstroData(contextCity.search).then(data => {
            if ("error" in data) {
                setAstro({});
                contextCity.setSearch("Kiev")
            } else {
                setAstro(data.astronomy.astro);
            }
        });
    }, [contextCity])
    return (
        astro.length === 0 ? null :
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
