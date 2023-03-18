import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

const Tasks = ({ tasks, setTasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </>
    );
};

export default Tasks;
