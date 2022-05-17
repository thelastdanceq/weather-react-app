import React from 'react'
import MainPanel from './MainPanel'
import SidePanel from './SidePanel'
export default function Main() {
    return (
        <div className="content">
            <div className='main container'>
                <MainPanel />
                <div className="break" style={{ width: "30px" }}>

                </div>
                <SidePanel />
            </div>
        </div>
    )
}
