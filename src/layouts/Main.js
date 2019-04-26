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
      <Route path="/" component = {Home} exact/>
      <Route path="/ToDoApp" component= {ToDoApp}/>
      <Route path="/AboutMe" component = {AboutMe}/>
      <Route path="/Api" component = {Api}/>
      <Route path="/Admin" component = {Admin}/>
      <Route path="/login" component = {Login}/>
      </>
   );
}
 
export default Main;