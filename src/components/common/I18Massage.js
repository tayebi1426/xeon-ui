import React from "react";
import i18n from '../../i18n/index';

const I18Massage = props => {
    return <span>{i18n(props.code)}</span>;
};

export default I18Massage;
