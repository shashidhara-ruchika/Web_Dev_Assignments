import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'



function Input({setQuery, units, setunits}) {
    
  const [ city, setCity ] =  useState("")

  const handleSearch = () => {
   if(city !== "") {
    setQuery({q: city})
   }
  }
   
 return (
   <div className='flex flex-row justify-center my-6'>
       <div className='flex flex-row w-3/4 items-center justify-center space-x-4'> 
           <input type="text" value={city} onChange={(e) => setCity(e.currentTarget.value)}
            placeholder='Search for City...' 
            className='text-l font-light p-2 w-full  shadow-xl focus:outline-none'/>
           <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'
           onClick={handleSearch} />
       </div>
   </div>
   
 )
}

export default Input