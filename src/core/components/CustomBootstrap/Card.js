import React from "react";
import PropTypes from "prop-types";
import {Card as BsCard, CardBody, CardTitle} from 'reactstrap'
import {I18Massage} from "../common";

const Card = ({title='',children}) => {

    return (<BsCard>
            <CardBody>
                <CardTitle className="text-bold">
                    <I18Massage code={title}/>
                </CardTitle>
                {children}
            </CardBody>
        </BsCard>
    );
};

Card.propTypes = {
    title: PropTypes.string
};
export default Card;