import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Createtask from './Createtask.js';
import Tasks from './Tasks.js'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container" id="maincontent">
          <div className="row">
            <div className="col-md-2 col-md-offset-2">
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link to="/">Tasks</Link>
                    <Link to="/createTask">Add Task</Link>
                  </li>
                </ul>
            </div>
            <div className="col-md-4">
              <Route exact path="/" component={Tasks} />
              <Route path="/createTask" component={Createtask} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
