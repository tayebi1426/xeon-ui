import React from "react";
import PropTypes from "prop-types";
import {Input, Label} from './index'
import {Icon, isFunction} from '../../index'
import '../../assets/css/sass/components/imageUploader.scss'

function readFile(file) {
    let fileReader = new Promise((resolve, reject) => {
        try {
            let reader = new FileReader();
            reader.onload = (e) => {
                return resolve(e.target['result']);
            };
            reader.readAsDataURL(file);
        } catch (ex) {
            reject(ex);
        }
    });
    fileReader.catch(ex => {
        console.error(ex);
    });
    return fileReader;
}

class ImageUploader extends React.Component {

    state = {
        image: null,
        showIconPan: false
    };

    handleSelectImage = (event) => {
        let elementName = event.target.name;
        let selectedFile = event.target.files[0];
        let fileName = selectedFile.name;
        this.handleRemoveImage();

        readFile(selectedFile).then(data => {
            return {
                elementName: elementName,
                fileName: fileName,
                data: data
            };
        }).then(imageInfo => {
            let {onSelectImage} = this.props;
            this.setState({image: imageInfo});
            if (isFunction(onSelectImage)) {
                onSelectImage.call(null, imageInfo);
            }
        })
    };

    handleRemoveImage = () => {
        this.setState({
            image: null,
            showIconPan: false
        });
        let onRemoveImage = this.props.onRemoveImage;
        if (isFunction(onRemoveImage)) {
            onRemoveImage.call(null);
        }
    };

    render() {
        let {id, name, label, uploadIcon, uploadIconSize, uploadIconColor, accept} = this.props;
        if (!id) {
            id = name;
        }
        return <React.Fragment>
            <Label htmlFor={id} className="d-block text-center" code={label}/>
            <div className="uploader-plus">
                {this.state.image ? this.renderImagePreview() :
                    <label htmlFor={id}>
                        <Icon code={uploadIcon} size={uploadIconSize} color={uploadIconColor}/>
                        <Input type="file"
                               id={id}
                               name={name}
                               accept={accept}
                               onChange={this.handleSelectImage}/>
                    </label>
                }
            </div>
        </React.Fragment>
    }

    renderImagePreview() {
        if (!this.state.image) {
            return null;
        }
        return <div className="imagePreview"
                    onMouseEnter={() => this.setState({showIconPan: true})}
                    onMouseLeave={() => this.setState({showIconPan: false})}>
            {this.renderIcons()}
            <img src={this.state.image.data} alt="preview"/>
        </div>
    }

    renderIcons() {
        if (!this.state.showIconPan) {
            return null;
        }
        return <div className="uploader-hover">
            <Icon code="trash-alt" onClick={this.handleRemoveImage} color="red" size="2x"/>
        </div>
    }
}

ImageUploader.propTypes = {
    formGroupProps: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    accept: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    onSelectImage: PropTypes.func,
    onRemoveImage: PropTypes.func,
    uploadIcon: PropTypes.string,
    uploadIconSize: PropTypes.string,
    uploadIconColor: PropTypes.string,
};

ImageUploader.defaultProps = {
    accept: 'image/x-png,image/jpeg',
    formGroupProps: {className: 'col-4 col-xs-12'},
    uploadIcon: 'cloud-upload',
    uploadIconSize: '2x',
    uploadIconColor: '#000'
};

export default ImageUploader;