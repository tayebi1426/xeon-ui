import React from 'react'
import {Card,Row,Button} from '../../core'

class ButtonDemo extends React.Component {

    render() {
        return <React.Fragment>
            <Card title="Button Color">
             <Row>
                <Button isPrimary={true} title="primary"/>
                <Button isPrimary={false} title="secondary"/>
                <Button className="dddx" isPrimary={true} title="button success" color="success"/>
                <Button link={true} title="button secondary"/>
             </Row>
            </Card>
            <Card title="Button Size">
             <Row>
                <Button isPrimary={true} title="lg" size="lg"/>
                <Button isPrimary={true} title="button large text" size="lg"/>
                <Button isPrimary={true} title="md" size="md"/>
                <Button isPrimary={true} title="sm" size="sm"/>
             </Row>
            </Card>
        </React.Fragment>
    }
}

export default ButtonDemo