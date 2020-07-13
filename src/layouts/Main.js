import React from 'react';
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import ToDoApp from "../pages/ToDoApp";
import Api from "../pages/Api";
import AboutMe from "../pages/AboutMe";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

const Main = () => {
   return (
      <>
      <Route path="First-react-project/" component = {Home} exact/>
      <Route path="First-react-project/ToDoApp" component= {ToDoApp}/>
      <Route path="First-react-project/AboutMe" component = {AboutMe}/>
      <Route path="First-react-project/Api" component = {Api}/>
      <Route path="First-react-project/Admin" component = {Admin}/>
      <Route path="First-react-project/login" component = {Login}/>
      </>
   );
}
 
export default Main;