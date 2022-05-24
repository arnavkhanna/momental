import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage  from './views/homepage';
import Calendar  from './views/mycalendar/index.js';
//import Recording from './views/recording/index.js';
import Profile from "./views/profile/index.js";
import Friends from "./components/ViewPosts/view-posts.js";
import CreatePost from './components/CreatePost/create-post.js';

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
            element = {<CreatePost/>}
          />
          
        </Routes>
    
    </div>

  );
}

export default App;
