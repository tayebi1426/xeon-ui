import React from "react";
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";
import {Card as BsCard} from 'reactstrap'
import {I18Massage} from "../common";
import Button from "../form/Button";
import  CardBody from './CardBody';
import  CardTitle from './CardTitle';

class Card extends React.Component {
    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    renderCollapse = () => {
        const {openIcon, closeIcon} = this.props;
        return <Button color="white"
                       onClick={this.toggle}
                       icon={this.state.collapse ? openIcon : closeIcon}
                       iconSize="2x"/>
    };

    renderBody = () => {
        return <CardBody>
            {this.state.collapse ? this.props.children : null}
        </CardBody>
    };

    render() {
        let {animationIn, animationOut} = this.props;
        return (
            <Animated animationIn={animationIn} animationOut={animationOut} isVisible={true} >
                <BsCard>
                    <CardTitle className="text-bold p-20">
                        <div className="row">
                            <div className="col p-3">
                                <I18Massage code={this.props.title}/>
                            </div>
                            {this.renderCollapse()}
                        </div>
                    </CardTitle>
                    {this.renderBody()}
                </BsCard>
            </Animated>
        );
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
    closeIcon: "angle-up",
    openIcon: "angle-down",
    animationIn: "fadeIn",
    animationOut: "fadeOut"
};

export default Card;
