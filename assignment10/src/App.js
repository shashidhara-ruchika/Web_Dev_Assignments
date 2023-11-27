
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Input from './components/Input'
import AreaTime from './components/AreaTime'
import Temperature from './components/Temperature'
import Forecast from './components/Forecast'

import fetchWeatherByCity from './services/weather'



function App() {

  const [query, setQuery] = useState({q: "Boston"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const findWeather = async() =>{
      await fetchWeatherByCity({...query, units }).then((data) => {
        setWeather(data)
      })
    }
    findWeather()
  },[query, units])

  const formatBackground = () =>{
    if(!weather){
      return  "from-cyan-700 to-blue-700"
    }
    const limit = units === "metric" ? 20 : 60
    if(weather.temp <= limit){
      return "from-yellow-700 to-orange-700"
    }
  }
    return(
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
          
          
        {weather && (
          <div>
            <Input setQuery={setQuery} units={units} setUnits={setUnits} />
            <AreaTime weather={weather} />
            <Temperature weather={weather} />
            <Forecast title="Daily Forecast" items={weather.day}/>
            <Routes>
              <Route path='/Mon' element={<Forecast title="Hourly Forecast" items={weather.monDay}/>} ></Route>
              <Route path='/Tue' element={<Forecast title="Hourly Forecast" items={weather.tueDay}/>} ></Route>
              <Route path='/Wed' element={<Forecast title="Hourly Forecast" items={weather.wedDay}/>} ></Route>
              <Route path='/Thu' element={<Forecast title="Hourly Forecast" items={weather.thuDay}/>} ></Route>
              <Route path='/Fri' element={<Forecast title="Hourly Forecast" items={weather.friDay}/>} ></Route>
              <Route path='/Sat' element={<Forecast title="Hourly Forecast" items={weather.satDay}/>} ></Route>
              <Route path='/Sun' element={<Forecast title="Hourly Forecast" items={weather.sunDay}/>} ></Route>
            </Routes>
            
          </div>
        )}
    
      </div>
    )
}

export default App
