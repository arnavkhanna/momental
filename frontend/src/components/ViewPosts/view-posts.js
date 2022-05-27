import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../../components/NavBar";
import "./style.css"
import Player  from "./audio-player.js";


const Recording = props => (
    <tr>
        <td>{props.recording.username}</td>
        <td>{props.recording.title}</td>
        <td>{props.recording.description}</td>
        <td>{props.recording.rating}</td>
        <td>{props.recording.date.substring(0,10)}</td>
        <td>
          <a href="#" onClick={() => {props.getUsername(props.recording.username)}}>Play</a>
        </td>

    </tr>
)

export default class RecordingsList extends Component {
    constructor(props) {
        super(props);

        this.state = {recordings: [], username: ""};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/recordings/', Recording)
          .then(response => {
            this.setState({ recordings: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      recordingsList() {
        return this.state.recordings.map(currentrecording => {
          return <Recording getUsername={this.getUsername} recording={currentrecording} key={currentrecording._id}/>;
        })
      }

      getUsername(name) {
        this.setState({username: name})
      }

      render() {
        return (
          <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Feed </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
            <div className = "current-name-date"> 
                {/**this is where the selected username and date will appear */}
                {this.state.username}
            </div>
            <div className = "audio-player">
              <Player/>
            </div>
            <div className="page-body">
              <tr>
                <th>Username</th>
                <th>Date</th>
                <th>Title</th>
                <th>Description</th>
                <th>Mood</th>
              </tr>
            </div>
            <tbody className="table-body">
              { this.recordingsList() }
            </tbody>
          </div>
            
    
          
        )
      }

    
}