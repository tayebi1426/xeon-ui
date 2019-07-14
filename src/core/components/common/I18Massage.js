import React from "react";
import {i18n} from '../../index';
import PropTypes from "prop-types";

const I18Massage = props => {
    return <span>{i18n.t(props.code)}</span>;
};
I18Massage.propTypes={
    code:PropTypes.string
};
export default I18Massage;
