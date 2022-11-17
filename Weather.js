//import React from 'react';
function GetWeather() {
    //API 이용
    const API_KEY = "0c90fa9985e8aedff752ac5f1dc92024";
    const city = "seoul";
    
    //const [temp, setTemp]=useState("");
    //const [icon, setIcon]=useState("");
    //const [query, setQuery]=useState("");
    
    //DOM객체들
    const weatherInfo = document.querySelector('.weatherInfo');
    const weatherIconImg = document.querySelector('.weatherIcon');
    //날씨 api를 통해 날씨에 관련된 정보들을 받아오기: 도시: 서울, 단위: 섭씨(도)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(function(json) {
        
        //온도, 위치, 날씨묘사, 날씨아이콘을 받는다. 
        
        const temperature = json.main[0].temp;
        const weatherDescription = json.weather[0].description;
        //description에 따라 아이콘 따로 띄우기
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        

        //받아온 정보들을 표현한다. 원래는 온도 옆에 도시이름도 있음(@${city})
        weatherInfo.innerText = `${temperature} °C`;
        weatherIconImg.setAttribute('src', weatherIconAdrs);
    })
    
    .catch((error) => console.log("error:", error)); 
    
    return (
        <>
        <div style={{width:'100px', height:'100px', backgroundcolor:'pink'}}>
        <div className="temp">{temperature}</div>
        <img src='http://openweathermap.org/img/wn/{weatherIconImg}@2x.png'></img>
        </div>
        </>
    )
    
}
export default GetWeather;