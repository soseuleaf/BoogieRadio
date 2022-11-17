import React, { useState } from "react";
import axios from "axios";

const api = {
    key: "ebf763f3403fce3adecc129c284dbcf4",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Weather({setCold}) {
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

    setCold(weather.temperature < 290 ? true : false);
    const iconurl=`http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
    <>
        
        <div className="weatherBox">
            <div id="Temperature" style={{color:"white", fontSize:"10px"}}>{(weather.temperature -273.15).toFixed(2)}℃</div>
            <div id="WeatherDiv" style={{color:"white", fontSize:"10px"}}>{weather.main}</div>
            <img src={iconurl} style={{width:"20px", height:"20px"}}alt=" "/>
            
        </div>
    </>
    );
}
export default Weather;