import React from 'react';

function Task(props) {
    const task = props.activeTask;

    return (
        <div className="row">
          <div className="col-md-12">
            <h2>{task.Name}</h2>
            <p>{task.Description}</p>
            { task.Completed === "0" &&
              <form onSubmit={props.submitHandler} id={task.rowid}>
                <button type="submit" className="btn btn-default">
                  Completed
                </button>
              </form>
            }
          </div>
        </div>
    );
}

export default Task;
