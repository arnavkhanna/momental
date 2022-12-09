import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import logo from "../../../src/Momental.png";

import axios from 'axios';

const HomePage = () =>{
   return(
       <div>
           <NavBar/>
           <div className="top_middle">
              <h1 className="heading"> Home </h1>
           </div>
           <div className="top_left" >
                <img className="icon" src={logo}></img>
            </div>
       </div>
   )
}

export default HomePage