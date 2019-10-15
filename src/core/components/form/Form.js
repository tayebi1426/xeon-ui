import React from "react";
import PropTypes from "prop-types";
import validate from "./validation";
import Validator from "validatorjs";
import "../../assets/css/sass/components/form.scss";

Validator.useLang('fa');


class Form extends React.Component {

    render() {
        let {children, innerRef,title,rules,data,labels,validation,onSubmit,...restProps} = this.props;
       const submit = (e) => {
            e.preventDefault();
           validation({});
            let errors = validate(data,labels,rules);
            if(errors) {
                validation(errors);
            }else{
                onSubmit();
            }
            };
        return (
                    <form ref={innerRef} onSubmit={submit} {...restProps}>
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
    children:PropTypes.node
};
Form.defaultProps = {
    autoComplete: 'off',
};

export default Form;
