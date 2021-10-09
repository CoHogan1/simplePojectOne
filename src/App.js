import './App.css'
import React, { Component } from 'react'
import Game from './game'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            userStatus: false,
            name: '',
            }
        }
    // saves this.state to browser cookies
    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state))
        super.setState(state)
    }

    // start here
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        if (this.state.name !== ''){
            this.setState({
                userStatus: true,
            })
        }
    }

    logout = () => {
        this.setState({
            userStatus: false,
        })
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    copyToClipboard = () => {
        let content = "https://www.linkedin.com/in/conner-hogan-40b39b37"
        navigator.clipboard.writeText(content)
    }

    render(){
        return(
        <div className="App">
        {this.state.userStatus
            ?

            <div>
            <button className="logout" onClick={this.logout}>Logout</button>
            <Game player={this.state.name}/>
            </div>

            :

            <div>
            <div className="spacer"></div>
            <form className="startform" onSubmit={this.handleLogin}>
                <h3>Enter Player Name</h3>
                <label>Name:</label>
                <input onChange={this.handleChange} name="name"/>

                <input className="logREG" type="submit" value="Login"></input>
            </form>

            <div className="isnt">This Game will test your reading, eyes, and reflex speed.
            The goal of the game is to click on the color that matches the color
            specified in the box above the game board in a small ammount of time.

            <div className="ex">Example
            <div className="main" >Green</div>
            <div className="exg">
                <div className="red" >Red</div>
                <div className="blue" >Blue</div>
                <div className="green" >Green</div>
            </div>
            </div>
            </div>
            </div>

            }
        </div>
        )
    }
}
