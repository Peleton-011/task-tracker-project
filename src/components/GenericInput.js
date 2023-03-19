import React from "react";
import PropTypes from "prop-types";

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

GenericInput.propTypes = {
    inputID: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
};


export default GenericInput;
