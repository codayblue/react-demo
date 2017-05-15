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

    return (
        <ul>
            {menu}
        </ul>
    );
}

export default Menu;