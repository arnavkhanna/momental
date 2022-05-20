import React from "react"
import "./style.css"
import { useNavigate} from "react-router-dom";


const NavBar = (props) =>{
    let navigate = useNavigate();

    function redirectHome() {
        navigate("/");
    }
    
    return(
        <nav className={`main-nav ${props.style}`}>
            
            <div className="sidebar">
                <a className= "calendar_link">
                    <li onClick={()=>navigate("/calendar")}>
                        <p style={{color: "#e409a2"}}>
                            <span className="iconify" data-icon="bi:cal-fill"></span><br />
                            <span className="calendar"></span><br />
                        </p>
                    </li>
                </a>

                <a className= "profile_link">
                    <li onClick={()=>navigate("/profile")}>
                        <p style={{color: "#e409a2"}}>
                            <span className="iconify" data-icon="bi:prof-fill"></span><br />
                            <span className="profile"></span><br />
                        </p>
                    </li>
                </a>

                <a className= "friends_link" >
                    <li onClick={()=>navigate("/friends")}>
                        <p style={{color: "#e409a2"}}>
                            <span className="iconify" data-icon="bi:frie-fill"></span><br />
                            <span className="friends"></span><br />
                        </p>
                    </li>
                </a>

                <a className= "recording_link" >
                    <li onClick={()=>navigate("/recording")}>
                        <p style={{color: "#070506"}} >
                            <span className="iconify" data-icon="bi:mic-fill"></span><br />
                            <span className="microphone"></span><br />
                            
                        </p>
                    </li>
                </a>
            </div>
            
        </nav>
    )
}
export default NavBar;