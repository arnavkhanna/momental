import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage  from './views/homepage';
import Calendar  from './views/calendar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path = "/"
          element = {<HomePage/>}
        />
        <Route
          path = "/calendar"
          element = {<Calendar/>}
        />

      </Routes>
      
    </div>
  );
}

export default App;
