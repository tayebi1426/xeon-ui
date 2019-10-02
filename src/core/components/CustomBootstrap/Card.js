import React, {useState} from "react";
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle,Collapse} from 'reactstrap'
import {I18Massage} from "../common";
import Button from "../form/Button";


const Card = ({title = '', icon = null, children, isCollapse, collapseConfig}) => {

    const [collapse,setState] = useState(false);

    function toggle() {
        collapse ? setState(false) : setState(true);
    }

    function setTitleAndIcon() {
        let config = {
            closeTitle:"بسته",
            openTitle:"باز",
            closeIcon:"fa fa-angle-up fa-lg",
            openIcon:"fa fa-angle-down fa-lg"
        };
        if (collapseConfig) {
            config.closeTitle = collapseConfig.closeTitle;
            config.openTitle = collapseConfig.openTitle;
        }
        return config;
    }

    function setAnimation() {
        let anim = {
            animationIn:"" ,
            animationOut:""
        };
        if(collapseConfig) {
            anim.animationIn = collapseConfig.animationIn;
            anim.animationOut = collapseConfig.animationOut;
        }
        return anim;
    }

    function renderIcon() {
        if (icon !== '') {
            return (
                <div className="col pull-left" dangerouslySetInnerHTML={{__html: icon}}/>
            )
        }
    }

    function renderBody() {
        const {animationIn,animationOut} = setAnimation();
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
        const {closeTitle,openTitle,closeIcon,openIcon} = setTitleAndIcon(collapseConfig);
        if (isCollapse) {
            return (
                collapse ?
                    <Button color="white" title={closeTitle}
                            onClick={toggle}
                            icon={closeIcon}
                            className="cursor-pointer pull-left px-2"
                    />
                    :
                    <Button color="white" title={openTitle}
                            onClick={toggle}
                            icon={openIcon}
                            className="cursor-pointer pull-left px-2"
                    />
            )
        }
    }

    return (
        <div>
            <BsCard>
                <CardTitle className="text-bold px-3 py-2">
                    <div className="row">
                        <div className="col"><I18Massage code={title}/></div>
                        {renderIcon()}
                        {renderCollapse()}
                    </div>
                </CardTitle>
                <Collapse
                isOpen={collapse}
            >

                    {renderBody()}

            </Collapse>
            </BsCard>
        </div>
    );
};

Card.propTypes = {
    collapseConfig: PropTypes.object,
    isCollapse: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string
};
export default Card;
