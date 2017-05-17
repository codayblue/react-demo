import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import Menu from './Menu.js';
import Task from './Task.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {

    fetch('http://localhost:8080/api/v1/tasks')
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      this.setState({tasks: json});
    });

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
            <div className="row">
              <div className="col-md-2">
                  <Menu tasks={this.state.tasks} />
              </div>
              <div className="col-md-4 col-md-offset-2">
                <Route exact path="/" render={() => { return <h2>TODO: Add form</h2>; }} />
                <Route path="/:id" component={Task} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
