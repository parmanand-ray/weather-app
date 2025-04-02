import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function Weather(){
    let [weatherInfo, setWeatherInfo] = useState({
    city: "Dehli",
    feels_like: 25.0,
    humidity: 27,
    temperature: 25.05,
    tempMax: 25.55,
    tempMin: 20.0,
    weather: "Haze",
    })
    return(
        <>
        <SearchBox updateWeather={setWeatherInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}