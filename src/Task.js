import React, { Component } from 'react';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {},
      id: props.match.params.id
    };

    this.completeTask = this.completeTask.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/tasks/' + this.state.id)
    .then(resp => { return resp.json(); })
    .then(json => { this.setState({task: json}); });
  }

  completeTask(e) {
    fetch('http://localhost:8080/api/v1/tasks/' + this.state.id, { method: 'POST'})
    .then(resp => { return resp.json(); })
    .then(json => { this.setState({ task: json }); });

    e.preventDefault();
  }

  render() {
      return (
          <div className="row">
            <div className="col-md-12">
              <h2>{this.state.task.Name}</h2>
              <p>{this.state.task.Description}</p>
              { this.state.task.Completed == 0 &&
                <form onSubmit={this.completeTask}>
                  <button type="submit" className="btn btn-default">
                    Completed
                  </button>
                </form>
              }
            </div>
          </div>
      );
  }
}

export default Task;
