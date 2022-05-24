import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../../components/NavBar";
import "./style.css"

const Recording = props => (
    <tr>
        <td>{props.recording.username}</td>
        <td>{props.recording.title}</td>
        <td>{props.recording.description}</td>
        <td>{props.recording.rating}</td>
        <td>{props.recording.date.substring(0,10)}</td>
        <td>
          <a href="#" onClick={() => { props.playRecording(props.recording._id) }}>Play</a>
        </td>

    </tr>
)

export default class RecordingsList extends Component {
    constructor(props) {
        super(props);

        this.state = {recordings: []};

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
          return <Recording recording={currentrecording} key={currentrecording._id}/>;
        })
      }

      render() {
        return (
          <div>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Friends </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              { this.recordingsList() }
            </tbody>
          </div>
            
    
          
        )
      }

    
}