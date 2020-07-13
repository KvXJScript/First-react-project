import React from 'react';

const Result = props => {

   const {date,city,sunrise,sunset,temp,pressure,wind,err} = props.weather

   let content = null;

   if(!err && city){
      const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
      const sunsetTime = new Date(sunset *1000).toLocaleTimeString()
      const temperature = Math.floor(temp -273.15);
      content = (
         <div className="result">
            <p>Data for... <span>{city}...</span></p>
            <p>Date of day and hour: <span>{date}</span></p>
            <p>Sunise: <span>{sunriseTime}</span></p>
            <p>Sunset: <span>{sunsetTime}</span></p>
            <p>Temperature: <span>{temperature}&#176;C</span></p>
            <p>Pressure: <span>{pressure}hPa</span></p>
            <p>Speed of wind: <span>{wind} M/s</span></p>
         </div>
      )

   }

   return ( <div className="result">
   {err? `There is no data for ${city}` : content}</div> );
}
 
export default Result;