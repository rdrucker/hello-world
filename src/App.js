import React, { Component } from 'react';
import logo from './logo.svg';
import { SketchPicker } from 'react-color';
import './App.css';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        color: "#8A2BE2",
      },
      age: 20,
    }
    this.buttonGroupInstance = (
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>5</Button>
          <Button>3</Button>
          <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>9</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
  handleChangeComplete = (color, event) => {
    this.state.age++;
    //this.setState({color: "red"});
    this.setState({ style:{ color: color.hex }});
  };
  render() {
    return (
      <div className="App" style={this.state.style}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.age} </h2>
        </div>
        <p className="App-intro">
          Renata To get started, edit <code>src/App.js</code> and save to reload.
          <SketchPicker color={this.state.style.color}
            onChangeComplete={this.handleChangeComplete} />
        </p>
        {this.buttonGroupInstance}
      </div>
    );
  }
}

export default App;
