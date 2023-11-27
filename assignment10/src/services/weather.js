import { IANAZone, DateTime } from "luxon"


const API = "8d1cfcd890487ca5d86e3cfe6c54c213"
const BASE = "https://api.openweathermap.org/data/2.5"

const fetchWeather = (info, searchParams) => {
    const url = new URL(BASE + "/" + info)
    url.search = new URLSearchParams({...searchParams, appid: API})

    return fetch(url).then((res) => res.json())
}

const currentWeather = (data) => {
    const {
        coord:{ lat, lon },
        main:{
            temp,
            temp_min,
            temp_max
        },
        name, 
        dt,
        weather,
        sys:{
            country
        }
    } = data

    const { main: details, icon } = weather[0];

    return { lat, lon, name, dt,country, details, icon, temp, temp_min, temp_max }
}

const formatForecast = (data) => {
    
    let { monDay, tueDay, wedDay, thuDay, friDay, satDay, sunDay, time, day, timezone, list } = data
    time = list.map(d => {
        return{
            title: formatTime(d.dt, d.timezone, 'hh:mm a'),
            time: formatDay(d.dt, d.timezone, 'ccc'),
            max: d.main.temp_max,
            min: d.main.temp_min,
            icon: d.weather[0].icon
        }
    })
    
    monDay = time.filter(reading => {
        return reading.time.includes("Mon")
    })
    // monDay = monDay.slice(1,6)
    tueDay = time.filter(reading => {
        return reading.time.includes("Tue")
    })
    // tueDay = tueDay.slice(1,6)
    wedDay = time.filter(reading => {
        return reading.time.includes("Wed")
    })
    // wedDay = wedDay.slice(1,6)
    thuDay = time.filter(reading => {
        return reading.time.includes("Thu")
    })
    // thuDay = thuDay.slice(1,6)
    friDay = time.filter(reading => {
        return reading.time.includes("Fri")
    })
    // friDay = friDay.slice(1,6)
    satDay = time.filter(reading => {
        return reading.time.includes("Sat")
    })
    // satDay = satDay.slice(1,6)
    sunDay = time.filter(reading => {
        return reading.time.includes("Sun")
    })
    // sunDay = sunDay.slice(1,6)

    const dailyData = data.list.filter(reading => {   
        return reading.dt_txt.includes("15:00:00")
        }
    )
    
    const MenuData = [
        {
            url: "monday"
        },
    ]
     
    day = dailyData.slice(0,7).map(d => {
        return{
            title: formatDay(d.dt, d.timezone, 'ccc'),
            max: d.main.temp_max,
            min: d.main.temp_min,
            icon: d.weather[0].icon,
            url: MenuData
        }        
    })  
    return { monDay, tueDay, wedDay, thuDay, friDay, satDay, sunDay, time, day, timezone }
}

const fetchWeatherByCity = async (searchParams) => {
    const cityWeather = await fetchWeather('weather', searchParams)
    .then(currentWeather)

    let newDateTime = DateTime.fromSeconds(cityWeather.dt)
    let secs = newDateTime.second
    let zone = newDateTime.zone


    console.log("City Date & Time:", formatDay(secs, zone));


    const { lat, lon } = cityWeather

    const forecastWeather = await fetchWeather('forecast', {
        lat,
        lon,
        units: searchParams.units,
    }).then(formatForecast)

    console.log("Forecast Weather response",{...cityWeather, ...forecastWeather})
    findTimezone(lat, lon)


  return {...cityWeather, ...forecastWeather}

}

const formatDay = (secs, zone, format = "cccc, dd LLL yyyy") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const formatTime = (secs, zone, format = "hh:mm:ss a") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const findTimezone = (latitude, longitude) => {
    console.log("latitude, longitude: ", latitude, longitude)
    try {
      const ianaZone = IANAZone.create({ latitude, longitude });
      const dateTime = DateTime.local().setZone(ianaZone);
      
      const timezone = dateTime.zone.name;
      console.log('Timezone:', timezone);
      return timezone;
    } catch (error) {
      console.error('Error finding timezone:', error);
      return null;
    }
  };

export default fetchWeatherByCity

export { formatDay, formatTime }















