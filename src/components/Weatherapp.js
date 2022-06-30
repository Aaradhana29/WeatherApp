import React, {useEffect, useState} from "react";
import "./css/style.css";
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";

const Weatherapp = () => {

    const [city, setCity] = useState([]);
    const [search, setSearch] = useState("Varanasi");

     useEffect ( () => {
       const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=8&units=metric&appid=c4152b34e9dc3c82f6b0f7f661bd609f`
          
          const response = await fetch(url);
          const resJson = await response.json();
          //console.log(resJson.list[0])
          setCity(resJson.list);
       };

        fetchApi();
     },[search] )
    return (
        <>
          <div className="box">
            <div className="inputData">
               <div className="iconlocation">
                  <FaMapMarkerAlt  size={'1.8em'} />
               </div>
               <input
               type="search"
                value={search}
               className="inputField" 
               onChange= { (event) => {
                   setSearch(event.target.value) } }/>
                    <div className="iconsrc" >
                    <FaSearch  size={'1.5em'} />
                    </div>
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
       
         
      </div>
        </>
    )
}

export default Weatherapp;

// api key ="a42e6bc9cf08254c7db42401a6a6ab61"