import React from "react";
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
import I18Massage from "./I18Massage";

function Link({title, ...restProps}) {
    return <NavLink {...restProps}>
        <I18Massage code={title}/>
    </NavLink>
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};
Link.defaultProps = {
    className: 'btn-link'
};
export default Link;