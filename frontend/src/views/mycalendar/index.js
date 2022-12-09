import React from "react"
import "./style.css";
import NavBar from "../../components/NavBar"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import logo from "../../../src/Momental.png";

const MyCalendar = () =>{
    return(
        <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Calendar </h1>
            </div>
            <div className="top_left" >
                <img className="icon" src={logo}></img>
            </div>
            <div className = "cal">
                <Calendar/>
            </div>
        </div>
    )
}
export default MyCalendar