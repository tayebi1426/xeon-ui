import React from "react";
import PropTypes from "prop-types";
import {Label as BsLabel} from "reactstrap";
import I18Massage from "../common/I18Massage";

export default class Label extends React.Component {

    render() {
        let {children, code, ...restProps} = this.props;
        return <BsLabel {...restProps}>
                    <span>{code ? <I18Massage code={code}/> : null}</span>
            {children}
        </BsLabel>
    }
}

Label.propTypes = {
    code: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    className: PropTypes.string
};

Label.defaultProps = {
    className: 'k-label'
};