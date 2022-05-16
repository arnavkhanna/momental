import React from "react"
import "./style.css"
import { useNavigate, useParams } from "react-router-dom";


const NavBar = (props) =>{
    
    return(
        <nav className={`main-nav ${props.style}`}>

            <div className="top_middle">
                <h1 className="heading"> My Mood Calendar </h1>
            </div>

            <div className="top_left">
                <h2 className="logo">Momental</h2>
            </div>

            <div className="sidebar">
                <p style={{color: "#e409a2"}}>
                    <span className="iconify" data-icon="bi:cal-fill"></span><br />
                    <span className="calendar"></span><br />
                </p>

                <a className= "profile_link" href="profile_page.html"> 
                    <p style={{color: "#e409a2"}}>
                        <span className="iconify" data-icon="bi:prof-fill"></span><br />
                        <span className="profile"></span><br />
                    </p>
                </a>

                <p style={{color: "#e409a2"}}>
                    <span className="iconify" data-icon="bi:frie-fill"></span><br />
                    <span className="friends"></span><br />
                </p>

                <a className= "recording_link" href="C:\Users\Owner\Desktop\Momental(old)\momental\frontend\src\views\recording\index.js"> 
                    <p style={{color: "#070506"}} >
                        <span className="iconify" data-icon="bi:mic-fill"></span><br />
                        <span className="microphone"></span><br />
                        
                    </p>
                </a>
            </div>
            
        </nav>
    )
}
export default NavBar;