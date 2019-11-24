import React from 'react'
import PropTypes from 'prop-types'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = ({images,...restProps}) => {
    return <ReactImageGallery items={images} {...restProps}/>
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    lazyLoad:PropTypes.bool,
    showNav:PropTypes.bool,
    slideDuration:PropTypes.number,
};
ImageGallery.defaultProps = {
    lazyLoad:true,
    slideDuration:1000,
    slideInterval:3000
};
export default ImageGallery;