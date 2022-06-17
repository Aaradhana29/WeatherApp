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
            <div className="week">
            {/* <h2 className="location">
               {search}
            </h2> */}
            
          
            {city.map((item) => (
          <div className="one">
            <p> Temperature   {`${item.main.temp}`}</p>
            <p> Min_Temp {item.main.temp_min}</p> <p> Max_temp{item.main.temp_max}</p>
            <img width={"70px"} src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
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