import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";
import Col from "./Col";
import I18Massage from "../common/I18Massage";
import Button from "../form/Button";

const CardTitle = (props) => {
    const {className, title, collapse, openIcon, closeIcon, handleToggleCollapse} = props;

    return <div className={className}>
        <Row form={false}>
            <Col className="pt-2 pl-2">
                <I18Massage code={title}/>
            </Col>
            <Button link={true}
                    color="black"
                    icon={collapse ? openIcon : closeIcon}
                    iconSize="2x"
                    onClick={handleToggleCollapse}/>
        </Row>
    </div>
};

CardTitle.propTypes = {
    className: PropTypes.string,
    cssModule: PropTypes.object,
};
CardTitle.defaultProps = {
    className: "card-title text-bold pl-3 pr-3",
    closeIcon: "angle-up",
    openIcon: "angle-down",
};

export default CardTitle;
