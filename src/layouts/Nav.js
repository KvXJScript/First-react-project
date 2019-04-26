import React from 'react';
import "../styles/Nav.css";
import {NavLink} from "react-router-dom";

const list = [
{name: "Home", path:"/" ,exact:true},
{name: "To Do App", path:"/ToDoApp"},
{name: "Api", path:"/Api"},
{name: "About Me", path:"/AboutMe"},
{name: "Admin", path:"/Admin"},
]
const Nav = () => {
   const links = list.map(item =>(
      <li key={item.name}>
      <NavLink to={item.path} exact = {item.exact? item.exact: false }>{item.name} </NavLink>
      </li>
   ))

   return (
    <nav className="main">
      <ul>
         {links}
      </ul>
   </nav>
   );
}
 
export default Nav;