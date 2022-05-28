import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";

const Friends = () =>{
    return(
        <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Feed </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
        </div>
    )
}
export default Friends