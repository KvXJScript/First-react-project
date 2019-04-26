import React, { Component } from 'react';
import Form from "../Api/Form";
import Result from "../Api/Result";
import "../styles/Api.css";

const APIKey = `e03b99ab34f9e87612e569e0ec845e2d`

class Api extends Component {
   state = { 
      text:"",
      date:"",
      city:"",
      sunrise:"",
      sunset:"",
      temp:"",
      pressure:"",
      wind:"",
      err:"",
    }
    handleChange = (e)=>{
      this.setState({
         text: e.target.value
      })
   }
    handleSubmit = (e)=>{
      e.preventDefault()
      const api = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&APPID=${APIKey}`;

      fetch(api)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.text,
          }))
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => ({
            err: true,
            city: prevState.text
          }))
        })


   }


render(){
   return(
      <div className="api">
         <Form submit = {this.handleSubmit} text = {this.state.text}change = {this.handleChange}/>
         <Result weather ={this.state}/>
      </div>
   )
}
}
export default Api;