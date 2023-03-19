import React from "react";

const GenericInput = () => {
    return (
        <div className="form-control">
            <label htmlFor=""></label>
            <input type="text" />
        </div>
    );
};

GenericInput.defaultProps = {
    inputID: "task-name",
    inputLabel: "Task",
    inputType: "text",
};

export default GenericInput;
