import React, { useState } from "react";
import axios from "axios";

const api = {
    key: "2eec96ef7cc3fc7314482f49d4e5917b",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
    const city = "Seoul";
    const url = `${api.base}weather?q=${city}&appid=${api.key}`;
    const [weather, setWeather] = useState("");
    
  // 날씨 가져오기
    axios.get(url).then((responseData) => {
        const data = responseData.data;
        setWeather({
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        main: data.weather[0].main,
        loading: false,
        });
    });
    
    const iconurl=`http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
    <>
        
        <div className="weatherBox" style={{backgroundColor:"white", width:"100px", height:"150px", textAlign:"center"}}>
            <div id="Temperature" style={{color:"black", fontSize:"10px"}}>{(weather.temperature -273.15).toFixed(2)}℃</div>
            <div id="WeatherDiv" style={{color:"black", fontSize:"10px"}}>{weather.main}</div>
            <img src={iconurl} style={{width:"20px", height:"20px"}}alt=" "/>
            
        </div>
    </>
    );
}

export default Weather;