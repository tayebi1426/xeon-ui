import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";
import Col from "./Col";
import I18Massage from "../common/I18Massage";
import Button from "../form/Button";

const CardTitle = (props) => {
    const {className, title, collapse, isOpened, openIcon, closeIcon, toggleCollapse} = props;
    if (!title) {
        return null;
    }
    return <div className={className + ' rounded '}>
        <Row>
            <Col className="card-title-caption">
                <Button link={true}
                        color="black"
                        title={title}
                        onClick={toggleCollapse}/>
            </Col>
            <Col className='card-collapse' md={1} lg={1}>
            {collapse && <Button link={true}
                                 color="black"
                                 icon={isOpened ? openIcon : closeIcon}
                                 onClick={toggleCollapse}/>}
            </Col>
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
