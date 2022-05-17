import React, { useState } from 'react'

export default function Search() {
  const [value, setvalue] = useState('')
  return (
    <div className='search'>
      <input
        placeholder='Enter the city ...'
        type="search"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value)
        }}
        className='search-input'
      />
    </div>
  )
}
