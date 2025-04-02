import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";

export default function SearchBox({updateWeather}) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "9cf7b2b511c5e087a4861a6254a8553a";
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false)

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await response.json();
    console.log(jsonRes);

    let result = {
      city: city,
      feels_like: jsonRes.main.feels_like,
      humidity: jsonRes.main.humidity,
      temperature: jsonRes.main.temp,
      tempMax: jsonRes.main.temp_max,
      tempMin: jsonRes.main.temp_min,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
    return result;
}catch(e){
   throw e;
}
  };

  

  let HandleChange = (evt) => {
    setCity(evt.target.value);
  };

  let HandleSubmit = async (evt) => {
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        // getWeatherInfo();
        updateWeather( await getWeatherInfo());
    }catch(e){
        setErr(true)
    }
    
  };

  return (
    <div className="search-box">
      <h3>Search Weather</h3>
      
      <form onSubmit={HandleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="filled"
          value={city}
          onChange={HandleChange}
          required
          fullWidth
        />
        <Button variant="contained" startIcon={<SearchIcon />} type="submit">
          Search
        </Button>
        {err && <Alert variant="outlined" severity="error">No such place exits</Alert>}
      </form>

    </div>
  );
}
