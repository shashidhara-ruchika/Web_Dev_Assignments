import React from 'react'
import { Link } from 'react-router-dom'
import { UilArrowUp, UilArrowDown} from '@iconscout/react-unicons'


function Forecast({title,items}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p> 
        </div>

        <hr className='my-2' />

        <div className='flex flex-row items-center justify-between'>
            {items.map((item) => {
                
                return(
                <Link to = {item.title} >
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm text-white'>
                            {item.title}
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt=''
                            className='w-12 my-1' />
                    </div>
                    <div className='flex flex-row items-start justify-between text-white text-xs mt-3'>
                        <UilArrowUp />
                        <p className='font-light text-xs'>
                            High: <span className='font-medium ml-1'>{item.max.toFixed()} &deg;C</span>
                        </p>
                    </div>
                    <div className='flex flex-row items-start justify-between text-white text-xs mt-1'>
                        <UilArrowDown />
                            <p className='font-light text-xs'>
                                Low: <span className='font-medium ml-1'>{item.min.toFixed()} &deg;C</span>
                            </p>
                    </div>
                    
                </div>
                </Link> 
                ) 
            })}
            
        </div>
    </div>
  )
}

export default Forecast