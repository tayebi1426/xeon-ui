import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";
import Col from "./Col";
import I18Massage from "../common/I18Massage";
import Button from "../form/Button";

const CardTitle = (props) => {
    const {className, title, collapse, isOpened, openIcon, closeIcon, toggleCollapse} = props;

    return <div className={className + ' rounded '}>
        <Row form={false}>
            <Col className="p-2 pl-5">
                {title && <I18Massage code={title}/>}
            </Col>
            {collapse && title && <Button link={true}
                                          color="black"
                                          icon={isOpened ? openIcon : closeIcon}
                                          iconSize="2x"
                                          onClick={toggleCollapse}/>}
        </Row>
    </div>
};

CardTitle.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    isOpened: PropTypes.bool,
    collapse: PropTypes.bool,
    cssModule: PropTypes.object,
    toggleCollapse: PropTypes.func,
};
CardTitle.defaultProps = {
    className: "card-title",
    closeIcon: "angle-up",
    openIcon: "angle-down",
};

export default CardTitle;
