import React from "react";
import { useState } from "react";

import GenericInput from "./GenericInput";

const AddTask = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    return (
        <form className="add-form">
            <GenericInput
                inputId="task-name"
                inputLabel="Task"
                inputType="text"
                inputPlaceholder="Add Task"
                onChange={(e) => setName(e.target.value)}
            />
            <GenericInput
                inputId="task-date"
                inputLabel="Day & Time"
                inputType="text"
                inputPlaceholder="Add Day & Time"
                onChange={(e) => setDate(e.target.value)}
            />
            <GenericInput
                inputClass="form-control-check"
                inputId="task-reminder"
                inputLabel="Set Reminder"
                inputType="checkbox"
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    );
};

export default AddTask;
