import React from "react";

const GenericInput = ({ inputID, inputLabel, inputType, inputPlaceholder}) => {
    return (
        <div className="form-control">
            <label htmlFor={inputID}>{inputLabel}</label>
            <input id={inputID} type={inputType} placeholder={inputPlaceholder || ""}/>
        </div>
    );
};

GenericInput.defaultProps = {
    inputID: "task-name",
    inputLabel: "Task",
    inputType: "text",
    inputPlaceholder: "Take out the trash",
};

export default GenericInput;
