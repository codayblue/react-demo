import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Menu from './menu.js';
import $ from 'jquery'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {

    $.get('http://localhost:8080/api/v1/tasks',function(data) {
      this.setState({ tasks: data});
    }.bind(this));

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="container">
            <div className="col-md-2">
                <Menu tasks={this.state.tasks} />
            </div>
            <div className="col-md-4">
              test
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
