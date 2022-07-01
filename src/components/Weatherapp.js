import React, {useEffect, useState} from "react";
import "./css/style.css";
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";
import GeoLocation from "./Geolocation";
import Debouncing from "./Debouncing"
import graph from "../graph.png"
const Weatherapp = () => {
   
    const location = GeoLocation();
    const [city, setCity] = useState([]);
    const [search, setSearch] = useState("Varanasi");
    const debouncedSearchTerm = Debouncing(search, 500);
     useEffect ( () => {
       const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=8&units=metric&appid=c4152b34e9dc3c82f6b0f7f661bd609f`
          const response = await fetch(url);
          const resJson = await response.json();
          //console.log(resJson.list[0])
          setCity(resJson.list);
       };

        fetchApi();
     },[debouncedSearchTerm] )
    return (
        <>
          <div className="box">
            <div className="inputData">
               <div className="iconlocation">
                  <FaMapMarkerAlt  size={'1.3em'} />
               </div>
               <div className="iconsrc" >
                    <FaSearch  size={'1.3em'} />
                </div>
               <input type="search" value={search} className="inputField" onChange= { (event) => { setSearch(event.target.value) } }/>
            </div>
          {!city ? (
            <p>No city Found!</p>
         ) : (  
            <div className="week">
            {city.map((item) => (
          <div className="one">
            <p id="max">{item.main.temp_max.toFixed(0)}°</p> <p id="min">{item.main.temp_min.toFixed(0)}°</p> 
            <img width={"60px"} height={"60px"} src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
            <p>{`${item.weather[0].description}`}</p>
          </div>
        ))}
            </div>
         )} 
       
       <div className="currentdata">
          <div>
            <h1 style={{fontSize:"50px" ,marginLeft:"30px"}}>33°C
             <img className="currentpic"  src="https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png"/> </h1>
          </div>
          <div style={{overflow:"scroll"}}>
            <img src={graph}/>
          </div>
          <div>
            <div className="pressure"><p className="bold">Pressure</p><p style={{marginLeft:"20px"}}>1000 hpa</p></div>
            <div className="humidity"><p className="bold">Humidity</p><p style={{marginLeft:"20px"}}>50 %</p></div>
          </div>
          <div>
            <div className="sunrise"><p className="bold">Sunrise</p><p style={{marginLeft:"20px"}}>6:30am</p></div>
            <div className="sunset"><p className="bold">Sunset</p><p style={{marginLeft:"20px"}}>6:30pm</p></div>
          </div>
       </div>
          
      </div>
        </>
    )
}

export default Weatherapp;

// api key ="a42e6bc9cf08254c7db42401a6a6ab61"