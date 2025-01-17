import React from 'react'
import './WeatherApp.css'
import { useState } from 'react'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'








export const WeatherApp = () => {

  let api_key = '19693e1ce7bb1828c2b44b5cc4992a31'

  const [wicon,setWicon]=useState(cloud_icon);

  const search =  async () => {
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value===""){
        return 0 ;
      } 
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-rate");
      const wind = document.getElementsByClassName("wind-rate");
      const temprature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");


      humidity[0].innerHTML = data.main.humidity+"%";
      wind[0].innerHTML = data.wind.speed+"Km/h";
      temprature[0].innerHTML = data.main.temp+"ºc";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon)
      }
      else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      {
            setWicon(cloud_icon)
      }
      else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      {
            setWicon(drizzle_icon)
      }
      else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      {
            setWicon(rain_icon)
      }
      else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
      {
            setWicon(rain_icon)
      }
      else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
      {
            setWicon(snow_icon)
      }
      else
      {
          setWicon(clear_icon)
      }







  }
 

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Buscar'/>
            <div className='search-icon'>
                <img src={search_icon} onClick={()=>{search()}}alt=""  />
            </div>
        </div>
        <div className='wather-image'>
          <img src={wicon} alt="" />
        </div>
        <div className='weather-temp'>24ºc</div>
        <div className="weather-location"> Argentina</div>
        <div className='data-container'>
            <div className="element">
                  <img src={humidity_icon} alt="" />
                  <div className="data">
                    <div className="humidity-rate">34%</div>
                    <div className='text'>Humidity</div>
                  </div>
            </div>
            <div className="element">
                  <img src={wind_icon}alt="" />
                  <div className="data">
                    <div className="wind-rate">300 km/5</div>
                    <div className='text'>wind speed</div>
                  </div>
            </div>

        </div>
    </div>
  )
}
