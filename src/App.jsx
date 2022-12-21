import './App.css'
import LoaderCard from './assets/components/LoaderCard'
import WeatherCard from './assets/components/WeatherCard'
import useWeather from './assets/hook/useWeather'

function App() {

  const { auxiliar, magicChange, weatherData, setAuxiliar, loading } = useWeather()


  return (
    <div className="App">

      {
        loading ?
          <LoaderCard />
          :
          <WeatherCard
            weatherData={weatherData}
            auxiliar={auxiliar}
            setAuxiliar={setAuxiliar}
            magicChange={magicChange}
          />
      }



    </div>
  )
}

export default App
