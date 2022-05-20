import React from "react"
import "./style.css";
import NavBar from "../../components/NavBar"

const Calendar = () =>{
    return(
        <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Calendar </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
        </div>
    )
}
export default Calendar