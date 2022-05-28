import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";

import axios from 'axios';

const HomePage = () =>{
   return(
       <div>
           <NavBar/>
           <div className="top_middle">
              <h1 className="heading"> Home </h1>
           </div>
           <div className="top_left" >
                <h2 className="logo">Momental</h2>
           </div>
       </div>
   )
}

export default HomePage