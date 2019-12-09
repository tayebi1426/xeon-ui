import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Card as BsCard} from 'reactstrap'
import CardBody from './CardBody';
import CardTitle from './CardTitle';

class Card extends React.Component {

    toggleCollapse = () => {
        if (this.props.collapse) {
            this.setState({isOpen: !this.state.isOpen});
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen
        };
    }

    render() {
        let {title, round, className, collapse, children} = this.props;
        className = classNames(className, round ? 'rounded' : null);
        return <BsCard className={className}>
            <CardTitle title={title} isOpen={this.state.isOpen}
                       toggleCollapse={this.toggleCollapse}
                       collapse={collapse}/>
            <CardBody hidden={!this.state.isOpen}>
                {children}
            </CardBody>
        </BsCard>
    }
}

Card.propTypes = {
    collapse: PropTypes.bool,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    closeIcon: PropTypes.string,
    openIcon: PropTypes.string,
    animationIn: PropTypes.string,
    animationOut: PropTypes.string,
    round: PropTypes.bool
};

Card.defaultProps = {
    title: '',
    collapse: false,
    isOpen: true,
    round: true,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    className: 'mb-3'

};

export default Card;
