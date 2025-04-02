import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
  let weatherImg ="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Replace with a direct image URL
let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let COLD_URL = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <h2>Weather Info</h2>

      {/* <Card sx={{ maxWidth: 345 }}> */}
      <Card sx={{ width: "500px", maxWidth: 500, margin: "auto", bgcolor: "rgba(128, 128, 128, 0.2)", p: 2}}>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[300] }} aria-label="weather">
              {(info.humidity>80)? <ThunderstormIcon/> : 
              (info.temperature > 15) ? <WbSunnyIcon/> :  <SevereColdIcon/>
              }
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`Weather in ${info.city}`}
          subheader={info.weather}
        />

        <CardMedia component="img" height="200" image={(info.humidity > 80 ? RAIN_URL : (info.temperature > 15) ? HOT_URL : COLD_URL)} alt="Weather icon" />

        <CardContent>
          <Typography variant="h6">
            Temperature: {info.temperature}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels Like: {info.feels_like}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min: {info.tempMin}°C | Max: {info.tempMax}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {info.humidity}%
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
