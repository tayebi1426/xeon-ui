import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "../../assets/sass/components/inlineText.scss"

export class InlineText extends Component {
    render() {
        let {beginText,endText}=this.props;
        return (
            <div className="inline-text-container">
                <div>
                    {beginText}
                </div>
                <div className="dash-border"/>
                <div>
                    {endText}
                </div>
            </div>
        )
    }
}
InlineText.propTypes={
    beginText :PropTypes.string,
    endText :PropTypes.string,
};

export default InlineText
