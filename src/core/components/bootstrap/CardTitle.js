import React from 'react';
import PropTypes from 'prop-types';
import Row from "./Row";
import Col from "./Col";
import Button from "../form/Button";
import I18Massage from "../common/I18Massage";

const CardTitle = (props) => {
    const {className, title, collapse, isOpened, openIcon, closeIcon, toggleCollapse} = props;
    if (!title) {
        return null;
    }
    let collapseBtnIcon = '';
    if (collapse) {
        collapseBtnIcon = isOpened ? openIcon : closeIcon;
    }
    return <div className={className + ' rounded '}>
        <Row onClick={toggleCollapse}>
            <Col className="card-title-caption">
                <I18Massage code={title}/>

            </Col>
            <Col className='card-collapse' md={1} lg={1}>
                <Button link={true}
                        color="black"
                        icon={collapseBtnIcon}/>
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
