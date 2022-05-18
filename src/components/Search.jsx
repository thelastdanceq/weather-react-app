import React, { useContext, useState } from 'react'
import { context } from '../context'

export default function Search() {
  const [value, setvalue] = useState('')
  const contextCity = useContext(context);
  return (
    <div className='search'>
      <input
        placeholder='Enter the city ...'
        type="search"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            contextCity.setSearch(e.target.value);
          };
        }}
        className='search-input'
      />
    </div>
  )
}
