import React from "react";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle} from 'reactstrap'
import {I18Massage} from "../common";

const Card = ({title = '', icon = null, children}) => {
    function renderIcon() {
        if(icon !== '') {
            return (
                <div className="col" dangerouslySetInnerHTML={{ __html: icon }}/>
            )
        }
    }
    return (<BsCard>
            <CardBody>
                <CardTitle className="text-bold">
                    <div className="row">
                        <div className="col"><I18Massage code={title}/></div>
                        {renderIcon()}
                    </div>
                </CardTitle>
                {children}
            </CardBody>
        </BsCard>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
};
export default Card;
