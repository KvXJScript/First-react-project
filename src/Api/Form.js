import React from 'react';

const Form = props => {
      return ( 
          
            <form onSubmit = {props.submit} className="api">
             <p className="typein">Type in your City: </p>
             <input type="text" placeholder="Your City" value = {props.text} onChange = {props.change}></input>
             <button>chceck for the city</button>
            </form>
          );
         } 
export default Form;