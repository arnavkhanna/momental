import React, {Component} from 'react';
import axios from 'axios';
import NavBar from "../../components/NavBar";
import { useTable } from "react-table";
import "./style.css"

const Recording = props => (
    <tr>
        <td>{props.recording.date.substring(0,10)}</td>
        <td>{props.recording.username}</td>
        <td>{props.recording.title}</td>
        <td>{props.recording.description}</td>
        <td>{props.recording.rating}</td>
        <td>{props.recording.file_id && <audio controls>
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
                <h1 className="heading"> Friends </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div> 
            <div className="page-body">
              <table>
                <thead>
                  <tr>
                    <th>Date   </th>
                    <th>Username   </th>
                    <th>Title   </th>
                    <th>Description   </th>
                    <th>Mood   </th>
                    <th>Recordings   </th>
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