import React from 'react'
import PropTypes from 'prop-types'
import withTranslation from "../../util/WithTranslation";

class GridCommand extends React.Component {

    render() {
        let {
            icon, iconSize, title, t, onClick,color,
            dataIndex,
            dataItem
        } = this.props;


        return <span title={t(title)} onClick={onClick.bind(null, {dataItem, dataIndex})}>
                 {icon &&<i className={`${icon} ${iconSize} ${color}`} /> }
        </span>
    }
}

GridCommand.propTypes = {
    icon: PropTypes.string.isRequired,
    iconSize: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

GridCommand.defaultProps = {
       iconSize: "fa-lg",
       color: 'text-secondary'

};


export default withTranslation(GridCommand)
