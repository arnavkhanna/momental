import React from "react"
import "./style.css";
import NavBar from "../../components/NavBar"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () =>{
    return(
        <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Calendar </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
            <div className = "cal">
                <Calendar/>
            </div>
        </div>
    )
}
export default MyCalendar