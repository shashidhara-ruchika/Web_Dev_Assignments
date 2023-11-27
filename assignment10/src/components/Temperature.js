import React from 'react'
import { UilArrowUp, UilArrowDown} from '@iconscout/react-unicons'


function Temperature({weather: {details, icon, temp, temp_min, temp_max}}) {
  return (
    <div>
        <div className='flex items-center justify-center mt-3'>
            <p className='text-cyan-300 text-xl font-light'>
                {details}
            </p>
        </div>
        <div className='flex items-center justify-center pt-0 pb-0'>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=''
            className='w-40' />
        </div>
        <p className=' text-white text-center text-5xl font-semibold pt-0'>{temp.toFixed()} &deg;C</p>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilArrowUp />
            <p className='font-light'>
                High: <span className='font-medium ml-1'>{temp_max.toFixed()} &deg;C</span>
            </p>

            <p className='font-light'>|</p> 
            
            <UilArrowDown />
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>{temp_min.toFixed()} &deg;C</span>
            </p> 
        </div>
    </div>
  )
}

export default Temperature