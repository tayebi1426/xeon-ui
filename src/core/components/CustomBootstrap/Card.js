import React from "react";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle} from 'reactstrap'
import {i18n} from "../..";

const Card = (props) => {

    return (<BsCard>
            <CardBody>
                <CardTitle>
                    {i18n(props.title)}
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