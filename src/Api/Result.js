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
            <p>Data for... <h2>{city}...</h2></p>
            <p>Date of day and hour: <h2>{date}</h2></p>
            <p>Sunise: <h2>{sunriseTime}</h2></p>
            <p>Sunset: <h2>{sunsetTime}</h2></p>
            <p>Temperature: <h2>{temperature}&#176;C</h2></p>
            <p>Pressure: <h2>{pressure}hPa</h2></p>
            <p>Speed of wind: <h2>{wind} M/s</h2></p>
         </div>
      )

   }

   return ( <div className="result">
   {err? `There is no data for ${city}` : content}</div> );
}
 
export default Result;