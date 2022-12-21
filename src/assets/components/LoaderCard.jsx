import React from 'react'
import Clock from "../img/sandClock.gif"

const LoaderCard = () => {
    return (
        <div className="card">

            <div className="face front">

                <img  src={Clock} alt="" />
                <h3>Nothing to see</h3>

            </div>

            <div className="face back">

                <h2>This should be the name</h2>
                <h1>This should be your location</h1>
                <h3>This is a Description</h3>
                <button>F°/C°</button>
                <div className='infoCard'>
                    <h4>Wind Speed: As fast as you click m/s</h4>
                    <h4>Humidity: just as wet as your Coke %</h4>
                    <h4>Clouds: Go out side and see them, not here %</h4>
                </div>

            </div>

        </div>
    )
}

export default LoaderCard