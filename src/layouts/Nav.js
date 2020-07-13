import React from 'react';
import "../styles/Nav.css";
import {NavLink} from "react-router-dom";

const list = [
{name: "Home", path:"First-react-project/" ,exact:true},
{name: "To Do App", path:"First-react-project/ToDoApp"},
{name: "Api", path:"First-react-project/Api"},
{name: "About Me", path:"First-react-project/AboutMe"},
{name: "Admin", path:"First-react-project/Admin"},
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