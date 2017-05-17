import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    const tasks = props.tasks;

    let menu = tasks.map((task) => {
        return (
            <li key={task.rowid}>
                <Link to={task.rowid}>
                    {task.Name}
                </Link>
            </li>
        );
    });

    menu.unshift(
      <li key="0">
        <Link to="/">
            Add New Task
        </Link>
      </li>
    );

    return (
        <ul className="nav nav-pills nav-stacked">
            {menu}
        </ul>
    );
}

export default Menu;
