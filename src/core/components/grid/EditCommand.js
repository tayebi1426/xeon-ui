import React from 'react'
import GridCommand from './GridCommand'
import PropTypes from "prop-types";

function EditCommand(props) {
    return <GridCommand  {...props} />
}

EditCommand.propTypes = {
    onClick: PropTypes.func
};

EditCommand.defaultProps = {
    icon: "edit",
    iconColor: "#f4b02f",
    title: "edit"
};

export default EditCommand;