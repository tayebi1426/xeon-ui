import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../common/Icon';
import withTranslation from "../../util/WithTranslation";

class GridCommand extends React.Component {

    render() {
        let {
            icon, iconSize,iconColor, title, t, onClick,
            dataIndex,
            dataItem
        } = this.props;
        console.debug('icon : ',icon);
        return <Icon icon={icon} size={iconSize} color={iconColor} />// <span title={t(title)} onClick={onClick.bind(null, {dataItem, dataIndex})}>

        //</span>
    }
}

GridCommand.propTypes = {
    icon: PropTypes.string.isRequired,
    iconSize: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

GridCommand.defaultProps = {
    iconSize: "2x"
};


export default withTranslation(GridCommand)
