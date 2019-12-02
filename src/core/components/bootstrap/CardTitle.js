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
            <Col className="col-11 card-title-caption">
                <I18Massage code={title}/>
            </Col>
            <Col className='col-1 card-collapse'>
                <Button link={true}
                        color="black"
                        size='xs'
                        className='card-title-collapse-btn'
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
