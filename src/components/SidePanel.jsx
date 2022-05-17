import React from 'react'
import Search from "./Search"
import Quality from "./Quality"
import Hours from './Hours'
export default function SidePanel() {
  return (
    <div className='side'>
      <Search />
      <Hours />
      <Quality />
    </div>
  )
}
