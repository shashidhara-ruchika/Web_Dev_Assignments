import React from 'react'
import {  formatDay, formatTime } from '../services/weather'

const AreaTime = ({weather: {dt, timezone, name, country}}) => {
    
    
  return (
    <div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium my-3'>
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
    
  )
}

export default AreaTime

