import React, { Component } from 'react';
import Task from './Task.js';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      activeTask: {
        Name: '',
        Description: '',
        Completed: "1",
        rowid: "0"
      }
    };

    this.selectTask = this.selectTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  componentDidMount() {

    fetch('http://localhost:8080/api/v1/tasks')
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      this.setState({tasks: json, activeTask: json[0]});
    });

  }

  selectTask(e) {
    e.preventDefault();
    const target = e.target;
    const taskIndex = target.id;
    const tasks = this.state.tasks;

    this.setState({activeTask: tasks[taskIndex]});
  }

  completeTask(e) {
    e.preventDefault();
    const target = e.target;
    const rowid = target.id;
    const tasks = this.state.tasks;

    fetch('http://localhost:8080/api/v1/tasks/' + rowid, {method: 'POST'})
    .then((resp) => { return resp.json() })
    .then((json) => this.setState({activeTask: json}));

    const newTasksList = tasks.filter((task) => task.rowid !== rowid);

    console.log(newTasksList);

    this.setState({tasks: newTasksList});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <ul className="nav nav-stacked nav-pills">
            {
              this.state.tasks.map(
                (task,ind) => <li key={task.rowid}><a href="#" id={ind} onClick={this.selectTask}>{task.Name}</a></li>
              )
            }
          </ul>
        </div>
        <div className="col-md-6">
          <Task activeTask={this.state.activeTask} submitHandler={this.completeTask} />
        </div>
      </div>
    );
  }
}

export default Tasks;
