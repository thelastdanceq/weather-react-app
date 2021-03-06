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
          if (e.keyCode === 13) {
            window.scroll(0, 0)
            contextCity.setSearch(e.target.value);
            setvalue('')
          };
        }}
        className='search-input'
      />
    </div>
  )
}
