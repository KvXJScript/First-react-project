import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import ToDoApp from "../pages/ToDoApp";
import Api from "../pages/Api";
import AboutMe from "../pages/AboutMe";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

const Main = () => {
   return (
      <>
      <Switch>
         <Route path="/First-react-project/" exact component = {Home} />
         <Route path="/First-react-project/ToDoApp" component= {ToDoApp}/>
         <Route path="/First-react-project/AboutMe" component = {AboutMe}/>
         <Route path="/First-react-project/Api" component = {Api}/>
         <Route path="/First-react-project/Admin" component = {Admin}/> 
         <Route path="/First-react-project/login" component = {Login}/>
      </Switch>
      </>
   );
}
 
export default Main;