import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage  from './views/homepage';
import Calendar  from './views/calendar/index.js';
import Recording from './views/recording/index.js';

function App() {
  return (
    <div className="App">
      <Recording/>
    </div>
  );
}

export default App;
