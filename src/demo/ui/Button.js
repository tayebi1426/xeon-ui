import React from 'react'
import {Card,Row,Button} from 'xeon-ui'

class ButtonDemo extends React.Component {

    render() {
        return <React.Fragment>
            <Card title="Button Color">
             <Row>
                <Button isPrimary={true} title="button primary"/>
                <Button isPrimary={false} title="button secondary"/>
                <Button className="dddx" isPrimary={true} title="button success" color="success"/>
                <Button link={true} title="button secondary"/>
             </Row>
            </Card>
            <Card title="Button Size">
             <Row>
                <Button isPrimary={true} title="button lg" size="lg"/>
                <Button isPrimary={true} title="button md" size="md"/>
                <Button isPrimary={true} title="button sm" size="sm"/>
             </Row>
            </Card>
        </React.Fragment>
    }
}

export default ButtonDemo