import React from "react";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle} from 'reactstrap'
import {I18Massage} from "../common";

const Card = (props) => {

    return (<BsCard>
            <CardBody>
                <CardTitle>
                    <I18Massage code={props.title}/>
                </CardTitle>
                {props.children}
            </CardBody>
        </BsCard>
    );
};

Card.propTypes = {
    title: PropTypes.string
};
export default Card;