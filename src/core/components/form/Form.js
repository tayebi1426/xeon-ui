import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/sass/components/form.scss";


class Form extends React.Component {

    render() {
        let {children, innerRef, ...restProps} = this.props;
        return (
            <form ref={innerRef} {...restProps}>
                {children}
            </form>
        )
    }
}

Form.propTypes = {
    title: PropTypes.string,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    innerRef: PropTypes.func,
    children: PropTypes.node
};
Form.defaultProps = {
    autoComplete: 'off',
};

export default Form;