import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: [<li>Loading</li>],
      tasks: []
    };
  }

  componentDidMount() {
    let options = {
      mode: 'no-cors'
    };

    $.get('http://localhost:8080/api/v1/tasks',function(data) {
      this.buildList(data);
    }.bind(this));
  }

  buildList(data) {
    let menu = [];

    for(let index in data) {
      menu.push(
        <li key={data[index].rowid.toString()}>
          <Link to={'/' + data[index].rowid}>
            {data[index].name}
          </Link>
        </li>
      );
    }
    
    this.setState({tasks: data, menu: menu});
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
              <ul>{this.state.menu}</ul>
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
