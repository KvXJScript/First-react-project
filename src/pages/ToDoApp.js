import React, { Component } from 'react';
import AddTask from "../ToDoApp/AddTask";
import TaskList from "../ToDoApp/TaskList";

import "../styles/ToDoApp.css";

class ToDoApp extends Component {
couter = 9
   state = { 
      tasks: [
         {
            id:0,
            text: 'Finally play Read Dead Redemtion',
            date: '2019-08-15',
            important:true,
            active:true,
            finishDate: null,
         },
      { id: 1, text: "Make some good things", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "Paint house after last December", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "Make bulk", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "Sell bear", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "Be nice :)", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "Cut my hair!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "Don't do dumb things", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "Live the whole life!", date: '2019-09-11', important: false, active: true, finishDate: null },
      ]
    }

    deleteTask = (id)=>{
       console.log("delete of element with id: " + id);
       const tasks = [...this.state.tasks];
       const index = tasks.findIndex(task => task.id === id)
       tasks.splice(index,1)
       this.setState({
          tasks
       })
      }

    ChangeTaskStatus = (id)=>{
       const tasks = Array.from(this.state.tasks);
       tasks.forEach(task=> {
          if(task.id === id){
             task.active = false;
             task.finishDate = new Date().getTime();
          }
       })
       this.setState({
          tasks
       });
    }

    addTask = (text,date,important)=>{
       const task = {     
            id: this.couter,
            text,
            date,
            important,
            active:true,
            finishDate: null,
       }
       this.counter++;

       this.setState (prevState =>({
          tasks: [...prevState.tasks, task]
       }))
       return true;
    }

   render() { 
      return ( 
         <div className="todoapp">
         <AddTask add = {this.addTask}/>
         <hr/>
         <TaskList task = {this.state.tasks} delete = {this.deleteTask} change = {this.ChangeTaskStatus}/>
         </div> );   
   }
}
 
export default ToDoApp;