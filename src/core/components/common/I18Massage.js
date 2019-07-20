import { withTranslation } from '../../lib';
import PropTypes from "prop-types";

const I18Massage = props => {
    return props.t(props.code);
};

I18Massage.propTypes={
    code:PropTypes.string.isRequired,
    t:PropTypes.func.isRequired
};

export default withTranslation(I18Massage);
