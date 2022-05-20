import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage  from './views/homepage';
import Calendar  from './views/calendar/index.js';
import Recording from './views/recording/index.js';
import Profile from "./views/profile/index.js";
import Friends from "./views/friends/index.js";

function App() {
  return (
    <div>
      <Routes>
          <Route
            path = "/"
            element = {<HomePage/>}
          />
          <Route
            path = "/calendar"
            element = {<Calendar/>}
          />
          <Route
            path = "/profile"
            element = {<Profile/>}
          />
          <Route
            path = "/friends"
            element = {<Friends/>}
          />
          <Route
            path = "/recording"
            element = {<Recording/>}
          />
          
        </Routes>
    
    </div>

  );
}

export default App;
