import React from "react";
import GenericInput from "./GenericInput";

const AddTask = () => {
    return (
        <form className="add-form">
            <GenericInput inputId="task-name" inputLabel="Task" inputType="text" inputPlaceholder="Add Task"/>
            <GenericInput inputId="task-date" inputLabel="Day & Time" inputType="text" inputPlaceholder="Add Day & Time"/>
            <GenericInput inputClass="form-control-check" inputId="task-reminder" inputLabel="Set Reminder" inputType="checkbox" />
            <input type="submit" value="Save Task"/>
        </form>
    );
};

export default AddTask;
