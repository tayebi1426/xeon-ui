import React from 'react'
import {Card, Col, Row} from '../../core'
import ImageGallery from '../../core/components/common/ImageGallery'


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class IconDemo extends React.Component {
    render() {
        return <React.Fragment>
            <Card title="Image Gallery">
                <Row>
                    <Col lg={8} className='offset-2'>
                        <ImageGallery images={images}/>
                    </Col>

                </Row>

            </Card>

        </React.Fragment>
    }
}

export default IconDemo