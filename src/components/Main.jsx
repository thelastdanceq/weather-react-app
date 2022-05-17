import React from 'react'
import MainPanel from './MainPanel'
import SidePanel from './SidePanel'
export default function Main() {
    return (
        <div className='main content container'>
            <MainPanel />
            <SidePanel />
        </div>
    )
}
