import React from 'react';
import Task from "./Task";

const TaskList = (props) => {

   const active = props.task.filter(task => task.active); 
   const done = props.task.filter(task => !task.active);

   done.sort((a,b) => b.finishDate - a.finishDate)
   

   if(active.length>=2){
      active.sort((a,b) =>{
         a = a.text.toLowerCase();
         b = b.text.toLowerCase();
         if(a<b) return -1;
         if(a>b) return 1;
         return 0
      })
   }
   
   const activeTasks = active.map(task => <Task key={task.id}
   task = {task} delete = {props.delete} change = {props.change}/>)
   const doneTasks = done.map(task => <Task key={task.id}
      task = {task} delete = {props.delete} change = {props.change}/>)

   return ( 
      <>
   <div className="active">
      <h1>Tasks to do:</h1>
      {activeTasks.length> 0 ? activeTasks : <h1>No more tasks to do</h1>}
   </div>
   
   <div className="done">
      <h1>Tasks done <em>({done.length})</em>:</h1>
      {doneTasks.length>7 ? <h2>the last 7 Tasks are displayed</h2> : ""}
      {doneTasks.length> 0 ? doneTasks.slice(0,5) : <h1>Keep going</h1>}
   </div>
   </>);
}
 
export default TaskList;