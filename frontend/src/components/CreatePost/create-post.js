import React, {Component} from 'react';
import NavBar from "../../components/NavBar";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./style.css"
import axios from 'axios';
import FileUploader from "C:/Users/Owner/Desktop/momental-frontend/momental/frontend/src/components/CreatePost/FileUploader.js"

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMood = this.onChangeMood.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: null,
            username: "",
            title: "",
            description: "", 
            date: new Date(),
            mood: 0
        }

    }
    onChangeFile(e){
        this.setState({
            file: e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeMood(e){
        this.setState({
            mood: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
          date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const recording = {
            file: this.state.file,
            username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            mood: this.state.mood
             
        }

        console.log(recording);
        
        axios.post('http://localhost:5000/recordings/add',recording)
        .then(res => console.log(res.data));
    }

    

    render() {
        return (
            <>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Recording </h1>
            </div>
            <div className="top_left" >
                <h2 className="logo">Momental</h2>
              </div>
        
            <div className='post-form'>
              <h2>Post a Moment</h2>
              <form onSubmit={this.onSubmit}>
              <FileUploader/>
              <br></br>
              <br></br>
                <label>Username:  </label>
                <input
                    type="text"
                    required
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
              <br></br>
              <br></br>
                <label>Title:  </label>
                <input
                    type="text"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                />
                <br></br>
                <br></br>

                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                
                <br></br>
                <br></br>
                <label>Description:  </label>
                <input
                    type="text"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                />
                <br></br>
                <br></br>
                <label> Mood : </label>
                <select ref="userInput"
                    required
                    value={this.state.mood}
                    onChange={this.onChangeMood}>
                
                    <option value={1}>1 (Bad)</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10 (Good) </option>
                </select>
                    
                  <br></br>
                  <br></br>
                <button>Post</button>
              </form>
              
            </div>
            
            </>
        )
    }
}