import React from 'react';
import "../styles/Admin.css";

const Admin = () => {
   return ( 
   <div className="admin">
   <form>
      <p>Login:</p>
      <input type="text" placeholder="podaj login"></input>
      <p>Password:</p>
      <input type="password"></input>
   </form>
   <button>Submit</button>
   </div> );
}
 
export default Admin;