import React, {useState} from "react";
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle} from 'reactstrap'
import {I18Massage} from "../common";
import Button from "../form/Button";


const Card = ({title = '', icon = null, children, isCollapse, collapseConfig}) => {

    const [collapse,setState] = useState(false);

    function toggle() {
        collapse ? setState(false) : setState(true);
    }

    function renderIcon() {
        if (icon !== '') {
            return (
                <div className="col pull-left" dangerouslySetInnerHTML={{__html: icon}}/>
            )
        }
    }

    function renderBody() {
        const {animationIn,animationOut} =  collapseConfig;
        return (
            collapse ?
                <Animated animationIn={animationIn} animationOut={animationOut} isVisible={true}>
                <CardBody>
                        {children}
                </CardBody>
                </Animated>
                :
                null
        )
    }

    function renderCollapse() {
        const {closeTitle,openTitle,closeIcon="fa fa-angle-up fa-lg",openIcon="fa fa-angle-down fa-lg"} = collapseConfig;
        return (
                collapse ?
                    <Button color="white" title={closeTitle}
                            onClick={toggle}
                            icon={closeIcon}
                            className="cursor-pointer pull-left px-3"
                    />
                    :
                    <Button color="white" title={openTitle}
                            onClick={toggle}
                            icon={openIcon}
                            className="cursor-pointer pull-left px-3"
                    />
            )
        }

    return (
        <div>
            {isCollapse ?
                <BsCard>
                    <CardTitle className="text-bold px-3">
                        <div className="row">
                            <div  className="col p-3">
                                <I18Massage code={title}/>
                            </div>
                            {renderIcon()}
                            {renderCollapse()}
                        </div>
                    </CardTitle>
                    {renderBody()}
                </BsCard>
                :
                <BsCard>
                    <CardTitle className="text-bold px-3">
                        <div className="row">
                            <div className="col"><I18Massage code={title}/></div>
                            {renderIcon()}
                        </div>
                    </CardTitle>
                <CardBody>
                    {children}
                </CardBody>
                </BsCard>
            }
        </div>
    );
};

Card.propTypes = {
    collapseConfig: PropTypes.object,
    isCollapse: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string
};

Card.defaultProps = {
    isCollapse: false,
    collapseConfig : {
        closeTitle:"",
        openTitle:"",
        closeIcon:"fa fa-angle-up fa-lg",
        openIcon:"fa fa-angle-down fa-lg",
        animationIn:"" ,
        animationOut:""
    }

};

export default Card;
