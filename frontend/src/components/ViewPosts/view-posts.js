import React, {Component} from 'react';
import axios from 'axios';
import NavBar from "../../components/NavBar";
import { useTable } from "react-table";
import "./style.css"
import logo from "../../../src/Momental.png";

const Recording = props => (
    <tr>
        <td class="date">{props.recording.date.substring(0,10)}</td>
        <td class="username">{props.recording.username}</td>
        <td class="title">{props.recording.title}</td>
        <td class="description"><div>{props.recording.description}</div></td>
        <td class="rating">{props.recording.rating}</td>
        <td class="recording">{props.recording.file_id && <audio controls preload="none">
        <source src={"https://momental.dev:5000/recordings/audio/"+props.recording.file_id} type="audio/ogg"/>
        Your browser does not support the audio element.
        </audio>}
        </td>
        

    </tr>
)

export default class RecordingsList extends Component {
    constructor(props) {
        super(props);

        this.state = {recordings: []};

    }

    componentDidMount() {
        axios.get('https://momental.dev:5000/recordings/', Recording)
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
                <h1 className="heading"> Feed </h1>
            </div>
            <div className="top_left" >
                <img className="icon" src={logo}></img>
              </div>
            <div className="page-body">
              <table className = "table-body">
                <thead>
                  <tr>
                    <th class="date">Date</th>
                    <th class="username">Username</th>
                    <th class="title">Title</th>
                    <th class="description">Description</th>
                    <th class="rating">Mood</th>
                    <th class="recording">Recordings</th>
                  </tr>
                </thead>
                <tbody>
                  { this.recordingsList() }
                </tbody>
              </table>
            </div>
          </div>
            
    
          
        )
      }

    
}