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

        let iconColor = 'text-secondary';

            switch(color){
                case 'primary':
                    iconColor = "text-primary" ;
                    break;
                case 'info':
                    iconColor = 'text-info';
                    break;
                case 'danger':
                    iconColor = 'text-danger';
                    break;
                case 'success':
                    iconColor = 'text-success';
                    break;
                case 'warning':
                    iconColor = 'text-warning';
                    break;
                default:
                    iconColor = "text-secondary";
                    break;
            }


        return <span title={t(title)} onClick={onClick.bind(null, {dataItem, dataIndex})}>
                 {icon &&<i className={`${icon} ${iconSize} ${iconColor}`} />  }
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
       iconSize: "fa-lg"

};


export default withTranslation(GridCommand)
