import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import GenericInput from "./GenericInput";

const AddTask = ({ onAdd, setShowAdd }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            //To-Do: improve
            alert("Please enter a task");
            return;
        }

        onAdd({ name, date, reminder });

        setName("");
        setDate("");
        setReminder(false);

        setShowAdd(false);
    };

    return (
        <div className="modal">
            <form className="add-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>New Task</legend>
                    <FaTimes
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => setShowAdd(false)}
                    />
                    <GenericInput
                        inputId="task-name"
                        inputLabel="Task"
                        inputType="text"
                        inputPlaceholder="Add Task Name"
                        onChange={(e) => setName(e.target.value)}
                        required={true}
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
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
                    <input
                        className="btn btn-block"
                        type="submit"
                        value="Save Task"
                    />
                </fieldset>
            </form>
        </div>
    );
};

export default AddTask;
