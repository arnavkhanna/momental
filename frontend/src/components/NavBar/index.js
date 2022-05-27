import React from "react"
import "C:/Users/Owner/Desktop/momental-frontend/momental/frontend/src/components/NavBar/style.css"
import { useNavigate} from "react-router-dom";


const NavBar = (props) =>{
    let navigate = useNavigate();
    
    return(
        <nav className={`main-nav ${props.style}`}>
            
            <div className="sidebar">
                <a className= "calendar_link">
                    <p style={{color: "#e409a2"}} onClick={()=>navigate("/calendar")}>
                        <span className="iconify" data-icon="bi:cal-fill"></span><br />
                        <span className="calendar"></span><br />
                     </p>
                </a>

                <a className= "profile_link">
                    <p style={{color: "#e409a2"}} onClick={()=>navigate("/profile")}>
                        <span className="iconify" data-icon="bi:prof-fill"></span><br />
                        <span className="profile"></span><br />
                    </p>
                </a>

                <a className= "friends_link" >
                     <p style={{color: "#e409a2"}} onClick={()=>navigate("/friends")}>
                        <span className="iconify" data-icon="bi:frie-fill"></span><br />
                        <span className="friends"></span><br />
                    </p>
                </a>

                <a className= "recording_link" >
                    <p style={{color: "#070506"}} onClick={()=>navigate("/recording")}>
                        <span className="iconify" data-icon="bi:mic-fill"></span><br />
                        <span className="microphone"></span><br />    
                    </p>
    
                </a>
            </div>
            
        </nav>
    )
}
export default NavBar;