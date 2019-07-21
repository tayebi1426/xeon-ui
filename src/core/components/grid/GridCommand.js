import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../common/Icon';


class GridCommand extends  React.Component {
    render() {
        let {icon,title, onClick,...restProps} = this.props;
        return <span title={title} onClick={onClick.bind(null,restProps)}>
            <Icon code={icon}  size={"2x"} />
        </span>
    }
}
GridCommand.propTypes={
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func
};

class GridCommands extends React.Component {
    render() {
        return <td>
            {this.props.children}
        </td>
    }
}
export { GridCommands,GridCommand};