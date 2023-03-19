import React from "react";
import GenericInput from "./GenericInput";

const AddTask = () => {
    return (
        <form className="add-task">
            <GenericInput inputId="task-name" inputLabel="Task" inputType="text" inputPlaceholder="Add Task"/>
            <GenericInput inputId="task-date" inputLabel="Day & Time" inputType="text" inputPlaceholder="Add Day & Time"/>
            <GenericInput inputId="task-reminder" inputLabel="Set Reminder" inputType="checkbox" />

        </form>
    );
};

export default AddTask;
