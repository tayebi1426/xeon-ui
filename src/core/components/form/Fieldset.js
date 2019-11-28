import React from "react";
import PropTypes from "prop-types";
import I18Massage from "../common/I18Massage";

function Fieldset({title, children}) {

    return <fieldset>
        <legend><I18Massage code={title}/></legend>
        {children}
    </fieldset>
}

Fieldset.propTypes = {
    fieldName: PropTypes.string,
    errorMessage: PropTypes.string
};

export default Fieldset;