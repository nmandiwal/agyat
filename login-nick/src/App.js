import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.pics = ["https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"
      , "https://www.iaspaper.net/wp-content/uploads/2017/10/Rabbit-Essay.jpg"
      , "http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"];

  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Agyaat</h1>
        </header> */}
        <br />
        {/* <Login /> */}
        <Carousal displayIndex={0} pics={this.pics} />
      </div>



    );
  }
}

class Carousal extends Component {
  displayIndex = this.props.displayIndex;
  render() {
    return (
      <div>
        {
          this.props.pics.map((pic, index) => (
            <div style={this.displayIndex === index ? { display: 'block' } : { display: 'none' }}>
              <img key={index} style={{ width: 300, height: 200 }} src={pic} onClick={(e) => this.handleClick()} />
            </div>
          ))}

      </div>
    );
  }
  handleClick() {
    this.displayIndex < this.props.pics.length - 1 ? this.displayIndex++ : (this.displayIndex = 0);
    this.setState({});

  }
  nick = setInterval(() => this.handleClick(), 3000);
}


class Login extends Component {

  render() {
    return (
      <div>
        <label> Login </label><br />
        user name:  <input name="userName" type="text" /> <br /><br />
        password :  <input name="password" type="password" /> <br /><br />
        <button id="send" onClick={this.handleLogin}> send </button>
      </div>
    );
  }
  handleLogin() {
    return (
      alert("Login ho gaya samajh lo..."));
  }
}


export default App;
