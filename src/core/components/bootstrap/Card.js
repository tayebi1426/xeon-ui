import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Card as BsCard} from 'reactstrap'
import CardBody from './CardBody';
import CardTitle from './CardTitle';

class Card extends React.Component {

constructor(props){
    super(props);
    this.state = {
        isOpened:props.isOpened
    };
}
    toggleCollapse = () => {
        if(this.props.collapse){
            this.setState({isOpened: !this.state.isOpened});
        }
    };

    renderBody = () => {
        if (!this.state.isOpened) {
            return null;
        }
        return <CardBody className='card-body'>
            {this.props.children}
        </CardBody>
    };

    render() {
        let {animationIn, animationOut, title, round, className, collapse} = this.props;
        className = classNames(className, round ? 'rounded' : null);
        return <BsCard className={className}>
                <CardTitle title={title} isOpened={this.state.isOpened}
                           toggleCollapse={this.toggleCollapse}
                           collapse={collapse}/>
                {this.renderBody()}
            </BsCard>
    }
}

Card.propTypes = {
    collapse: PropTypes.bool,
    isOpened: PropTypes.bool,
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
    isOpened: true,
    round: true,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    className: 'mb-3'

};

export default Card;
