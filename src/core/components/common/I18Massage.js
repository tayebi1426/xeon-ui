import React from "react";
import {I18n} from '../../index';
import PropTypes from "prop-types";

const I18Massage = props => {
    return <span>{I18n.t(props.code)}</span>;
};
I18Massage.propTypes={
    code:PropTypes.string
};
export default I18Massage;
