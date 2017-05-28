import React, { Component } from 'react';

class Createtask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };

    this.formControlHandler = this.formControlHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formControlHandler(e) {
    var target = e.target;
    var targetName = target.id;
    var targetValue = target.value;

    this.setState({[targetName]: targetValue});
  }

  formSubmitHandler(e) {
    e.preventDefault();

    const currentState = this.state;
    const formData = `name=${currentState.name}&description=${currentState.description}`;
    const fetchOpt = {
      method: 'POST',
      body: formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
    };

    fetch('http://localhost:8080/api/v1/tasks',fetchOpt)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      this.changeAddress();
    });

  }

  changeAddress() {
    window.location = "/";
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Task:</label>
              <input type="text" className="form-control" value={this.state.name} placeholder="Task" id="name" onChange={this.formControlHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="sr-only">Description:</label>
              <textarea className="form-control" value={this.state.description} placeholder="Description" id="description" onChange={this.formControlHandler} />
            </div>
            <button className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Createtask;
