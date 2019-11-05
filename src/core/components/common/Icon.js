import React from 'react'
import PropTypes from 'prop-types'
import {concatStrings} from '../../util/StringUtils'

const Icon = (props) => {
    let {code, size, color, perFix} = props;
    if(!code){
        return null;
    }
    let className = concatStrings(perFix, ' fa-', code, ' fa-', size);
    return <span style={{color}} className={className}/>
};

Icon.propTypes = {
    code: PropTypes.string,
    perFix: PropTypes.string,
    iconSet: PropTypes.oneOf(['FONT_AWESOME']),
    color: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "lg", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
};
Icon.defaultProps = {
    perFix: 'fal',
    iconSet:'FONT_AWESOME',
    size:'1x'

};
export default Icon;