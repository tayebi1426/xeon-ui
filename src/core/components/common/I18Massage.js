import {withTranslation} from '../../lib';
import PropTypes from "prop-types";

function I18Massage ({code, t}){
    return code
        && t(code);
}

I18Massage.propTypes = {
    code: PropTypes.string.isRequired
};

export default withTranslation(I18Massage);
