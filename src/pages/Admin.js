import React from 'react';
import "../styles/Admin.css";

const Admin = () => {
   return ( 
   <div className="admin">
   <form>
      <p>Login:</p>
      <input type="text" placeholder="Login..."></input>
      <p>Password:</p>
      <input type="password" placeholder="Password..."></input>
   </form>
   <button>Submit</button>
   </div> )
}
 
export default Admin;