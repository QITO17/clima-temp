import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Weather from './Components/Weather'
import Loader from './Components/Loader'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temp, setTemp] = useState()
  const succces = (pos) => {
    const currentCorrrds = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
  }
  setCoords(currentCorrrds)
}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succces)
  }, [])

  useEffect(() => {
    if(coords){ 
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=46cf9236e22b9b3311155573f64014cd`;
    
      axios.get(URL)
      .then((res) => {
        setweather(res.data)
        const celcius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celcius * (9/5) + 32).toFixed(1)
        const newTemps = {
          celcius:celcius,
          farenheit:farenheit
        }
      setTemp(newTemps)
})
      .catch((err) => console.log(err))
    }
    
 
  }, [coords])

  return (
  <div className="App flex justify-center items-center min-h-screen bg-[url('./imgs/bg.jpg')]
  bg-cover px-2">

    {
      weather ? (<Weather weather={weather} temp={temp}/>): 
      (
        <Loader />
      )
    }
  
   </div>
    
  )
}

export default App
