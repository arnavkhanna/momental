import React, {Component} from 'react';
import NavBar from "../../components/NavBar";
import "./style.css"
import axios from 'axios';

export default class AddFriend extends Component {
    constructor(props) { 
        super(props);

        this.onChangeFriends = this.onChangeFriends.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            friend: ''
        }
    }

    onChangeFriends(e) {
        this.setState({
            friend: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const added = {
            username: "roach",
            friend: this.state.friend
        }
    }

    render() {
        return (
            <>
            <NavBar/>
            <div className="top_middle">
                <h1 className="heading"> Add Friends </h1>
            </div>
            <div className="top_left" >
                <h2 className="logo">Momental</h2>
              </div>
        
            <div className='post-form'>
              <h2>Add a Friend</h2>
              <form onSubmit={this.onSubmit}>
              <br></br>
              <br></br>
                <label>Enter username:  </label>
                <input
                    type="text"
                    required
                    value={this.state.friend}
                    onChange={this.onChangeFriends}
                />
                <button>Search</button>
              </form>
              
            </div>
            
            </>
        )
    }
}