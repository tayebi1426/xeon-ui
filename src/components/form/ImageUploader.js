import React from "react";
import * as BS from 'reactstrap'
import PropTypes from "prop-types";
import Msg from "../../i18n/Messages";
import CommonUtils from '../../lib/CommonUtils'
import '../../assets/sass/components/imageUploader.scss'

export default class ImageUploader extends React.Component {
    static IMAGE_MEM_TYPE = 'image/x-png,image/jpeg';

    constructor(props) {
        super(props);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.state = {
            image: null,
            showIconPan: false
        };
    }

    onChangeHandle(event) {
        let elementName = event.target.name;
        let selectedFile = event.target.files[0];
        let fileName = selectedFile.name;
        this.removeImage();

        CommonUtils.readFile(selectedFile).then(data => {
            let imageInfo = {
                elementName: elementName,
                fileName: fileName,
                data: data
            };
            this.setState({image: imageInfo});
            if (this.props.onSelectImage) {
                this.props.onSelectImage(imageInfo);
            }
        })
    }

    removeImage() {
        this.setState({
            image: null,
            showIconPan: false
        });
    }

    render() {
        let {formGroupProps, id, name, label} = this.props;
        if (!id) {
            id = name;
        }
        return <React.Fragment>
            <BS.FormGroup {...formGroupProps}>
                <label className="d-block text-center">{label}</label>
                <div className="uploader-plus">
                    {this.state.image ? null :
                        <label htmlFor={id}>{
                            Msg.imageUploader.selectImage
                        }</label>
                    }
                    <BS.Input type="file" id={id} name={name}
                              accept={ImageUploader.IMAGE_MEM_TYPE}
                              onChange={this.onChangeHandle.bind(this)}/>
                    {this.renderImagePreview()}
                </div>
            </BS.FormGroup>
        </React.Fragment>
    }

    renderImagePreview() {
        if (!this.state.image) {
            return null;
        }
        return <div className="imagePreview" onMouseEnter={() => this.setState({showIconPan: true})}
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
            <i className="material-icons">remove_red_eye</i>
            <i className="material-icons" onClick={this.removeImage}>delete</i>
        </div>
    }
}

ImageUploader.propTypes = {
    formGroupProps: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    onSelectImage: PropTypes.func
};

ImageUploader.defaultProps = {
    formGroupProps: {className: 'col-4 col-xs-12'},
};
