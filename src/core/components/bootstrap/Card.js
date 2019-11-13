import React from "react";
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Card as BsCard} from 'reactstrap'
import CardBody from './CardBody';
import CardTitle from './CardTitle';

class Card extends React.Component {
    state = {
        isOpened: true
    };

    toggleCollapse = () => {
        this.setState({isOpened: !this.state.isOpened});
    };

    renderBody = () => {
        if (!this.state.isOpened) {
            return null;
        }
        return <CardBody className='pl-5'>
            {this.props.children}
        </CardBody>
    };

    render() {
        let {animationIn, animationOut, title,round, className,collapse} = this.props;
        className=classNames(className,round ? 'round': null);
        return <Animated animationIn={animationIn} animationOut={animationOut} isVisible={true}>
            <BsCard className={className}>
                <CardTitle title={title} isOpened={this.state.isOpened}
                           toggleCollapse={this.toggleCollapse}
                           collapse={collapse}/>
                {this.renderBody()}
            </BsCard>
        </Animated>
            ;
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
    round:true,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    className: 'mb-4'

};

export default Card;
