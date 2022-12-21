import React, { useEffect, useState } from 'react'
import Japan from "../img/dahyun.gif";
import Scattered from "../img/scattered-clouds.gif"
import ClearSky from "../img/clearSky.gif"
import Mist from "../img/mist.gif"


const WeatherCard = ({ magicChange, setAuxiliar, auxiliar, weatherData }) => {

    const [changeImg, setChangeImg] = useState(Japan)

    useEffect(() => {
        if (weatherData?.weather[0].description.includes('clear sky')) {
            setChangeImg(ClearSky)
        } else if (weatherData?.weather[0].description.includes('few clouds')) {
            setChangeImg(Scattered)
        } else if (weatherData?.weather[0].description.includes('scattered clouds')) {
            setChangeImg(Scattered)
        } else if (weatherData?.weather[0].description.includes('broken clouds')) {
            setChangeImg(Scattered)
        } else if (weatherData?.weather[0].description.includes('shower rain')) {
            setChangeImg(Scattered)
        }else if (weatherData?.weather[0].description.includes('rain')) {
            setChangeImg(Scattered)
        }else if (weatherData?.weather[0].description.includes('thunderstorm')) {
            setChangeImg(Scattered)
        }else if (weatherData?.weather[0].description.includes('snow')) {
            setChangeImg(Scattered)
        }else {
            setChangeImg(Mist)
        }

    }, [weatherData])





    return (
        <div className="card">

            <div className="face front">

                <img src={changeImg} alt="" />
                <h3>Make a Hover to see</h3>

            </div>

            <div className="face back">

                <h1>{weatherData?.name}</h1>
                <div className="container">
                    <img src={weatherData && `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} alt="iconWeather" />
                </div>
                <h2>{weatherData?.weather[0].description}</h2>
                <span><h3>{magicChange}</h3></span>
                <button onClick={() => { setAuxiliar(!auxiliar)}}>F°/C°</button>
                <div className='infoCard'>
                    <h4>Wind Speed: {weatherData?.wind.speed}m/s</h4>
                    <h4>Humidity: {weatherData?.main.humidity}%</h4>
                    <h4>Clouds: {weatherData?.clouds.all}%</h4>
                </div>


            </div>



        </div>
    )
}

export default WeatherCard