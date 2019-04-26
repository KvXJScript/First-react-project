import React, { Component } from 'react';
import "../styles/AddTask.css";

class AddTaskList extends Component {

   minDate = new Date().toISOString().slice(0,10);

   state = { 
      text: "",
      checked: false,
      date: this.minDate,
    }
    handleDate = (e)=>{
      this.setState({
         date: e.target.value
      })
   }
   handleChange = (e) =>{
      this.setState({
         text: e.target.value
      })
   }
   handleCheck = (e) =>{
      this.setState({
         checked: e.target.checked
      })
   }

   handleClick = ()=>{
      const {text,checked,date} = this.state;
      
      if(text.length>3){
      const add = this.props.add(text,date,checked)
      if(add){
         this.setState({
            text:"",
            checked: false,
            date:this.minDate,
         })
      }
   }
   else{
      alert("The task must be longer than 3 letters/numbers")
   }
   }

   render() {

      let maxDate = this.minDate.slice(0,4) *1 + 1;
      maxDate = maxDate+"-12-31";
      
      return (
         <div className="addtask">
            <input type="text" placeholder="Add task" value = {this.state.text} onChange = {this.handleChange}/>
            <input type="checkbox" checked = {this.state.checked} onChange = {this.handleCheck}/>
            <label htmlFor="important" className="priority">Priority</label> <br/>
            <label htmlFor="date">until when to do it</label>
            <br/>
            <input type ="date" value ={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
            <button onClick = {this.handleClick}>Add</button>
         </div>
      );
   }
}
 
export default AddTaskList;