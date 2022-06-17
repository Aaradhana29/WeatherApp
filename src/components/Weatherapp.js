import React, {useEffect, useState} from "react";
import "./css/style.css";
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";

const Weatherapp = () => {

    const [city, setCity] = useState([]);
    const [search, setSearch] = useState("Varanasi");

     useEffect ( () => {
       const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=c4152b34e9dc3c82f6b0f7f661bd609f`
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
               <div className="iconlcsrc">
                  <FaMapMarkerAlt  size={'1.8em'} />
               </div>
               <input
               type="search"
                value={search}
               className="inputField" 
               onChange= { (event) => {
                   setSearch(event.target.value) } }/>
                    <div className="iconlcsrc">
                    <FaSearch  size={'1.5em'} />
                    </div>
                  
            </div>
          {!city ? (
            <p>No city Found!</p>
         ) : (  
            <div className="info">
            <h2 className="location">
               {search}
            </h2>
            <div>
          
            {city.map((item) => (
          <div>
            <h1>{`${item.main.temp}`}</h1>
            <h1>{`${item.weather[0].description}`}</h1>
            <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
            
          <h2>
          {item.main.temp_min}  
       </h2>

       <h3>
          {item.main.temp_max}  
       </h3>
       </div>
        ))}
            </div>
            
         </div>
              
         )} 

          </div>
        </>
    )
}

export default Weatherapp;

// api key ="a42e6bc9cf08254c7db42401a6a6ab61"