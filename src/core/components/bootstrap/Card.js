import React from "react";
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";
import {Card as BsCard} from 'reactstrap'
import CardBody from './CardBody';
import CardTitle from './CardTitle';

class Card extends React.Component {
    state = {
        collapse: true
    };

    handleToggleCollapse = () => {
        this.setState({collapse: !this.state.collapse});
    };

    renderBody = () => {
        if (!this.state.collapse) {
            return null;
        }
        return <CardBody className='pl-5'>
            {this.props.children}
        </CardBody>
    };

    render() {
        let {animationIn, animationOut, title} = this.props;
        return <Animated animationIn={animationIn} animationOut={animationOut} isVisible={true}>
                <BsCard>
                    <CardTitle title={title} collapse={this.state.collapse}
                               handleToggleCollapse={this.handleToggleCollapse}/>
                    {this.renderBody()}
                </BsCard>
            </Animated>
        ;
    }
}

Card.propTypes = {
    collapseConfig: PropTypes.object,
    isCollapse: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string,
    closeIcon: PropTypes.string,
    openIcon: PropTypes.string,
    animationIn: PropTypes.string,
    animationOut: PropTypes.string
};

Card.defaultProps = {
    title: '',
    isCollapse: false,
    animationIn: "fadeIn",
    animationOut: "fadeOut"
};

export default Card;
