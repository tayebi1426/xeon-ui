import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'

const Icon=(props)=> {
    let {code,...restProps}=props;
    return <FontAwesomeIcon icon={code} {...restProps} />
};

export default Icon;