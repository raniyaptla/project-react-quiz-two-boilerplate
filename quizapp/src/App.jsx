import { Component } from "react";

import Quiz from "./Components/Quiz";

import "./App.css";

export default class App extends Component{
  render(){
    return(
      <div class="quiz">
        
        <Quiz/> 
       
      </div>
    );
  };
}