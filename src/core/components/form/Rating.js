import React, { Component } from 'react'
import Rating from "react-rating"
import "../../assets/sass/components/rating.scss"
export class RatingComponent extends Component {
    render() {
        return (
            <Rating
                emptySymbol="empty-star"
                fullSymbol="fill-star"
                {...this.props}
            />
        )
    }
}

export default RatingComponent
