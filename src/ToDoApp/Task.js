import React from 'react';

const Task = (props) => {

   const style = {
      color: 'red',
   }

   const {text, date, id, active, important, finishDate} = props.task

   if(active){
   return ( 
      <div className="task">
         <p>
            <strong style ={important ? style : null  } >{text}</strong> - to <span>{date}</span>
            <button onClick= {()=> props.change(id)}>Has Been Done</button>
            <button onClick= {()=>props.delete(id)}>X</button>
         </p>
      </div>
    );}
    else{

      const finish = new Date(finishDate).toLocaleString()

       return(
          <div>
             <p>
          <strong style ={important ? style : null  } >{text}</strong>
          <em>(do to {date})</em> <br/>
          <span>
          -confirmation of impementation {finish}</span>
          <button onClick= {()=>props.delete(id)}>X</button>
       </p>
       </div>
       )
    }
}

 
export default Task;