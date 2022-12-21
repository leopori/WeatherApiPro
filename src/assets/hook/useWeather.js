import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const useWeather = () => {


  const [coordinates, setCoordinates] = useState()
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const long = pos.coords.longitude
      setCoordinates({ lat, long })
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() => {
    if (coordinates !== undefined) {
      /*This key is just for signUp to the OpenWeather API */
      const API_Key = '2a0cabe780439a8682049d860daf2249'
      /* */
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${API_Key}&units=metric`
      axios.get(URL)
        .then(res => {
          setWeatherData(res.data)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }

  }, [coordinates])


  console.log(weatherData);

  const [auxiliar, setAuxiliar] = useState(false)

  const magicChange = auxiliar ? `${Math.round(weatherData?.main.temp)} °C` : `${Math.round((((weatherData?.main.temp)) * 1.8) + 32)} °F`







  return { auxiliar, magicChange, weatherData, setAuxiliar, loading }
}

export default useWeather