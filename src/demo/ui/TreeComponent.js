import React from 'react'
import {Tab, TabContainer,Card} from '../../core'
import {TreeView} from '@progress/kendo-react-treeview';

function TabBody(props) {
    return <div>Tab Content : {props.tabId}</div>;
}

class TreeComponent extends React.Component {
    state = {
        data: [
            {id:1, name : 'Node 1',expanded:true, hasChildren:true,
                items:[{id:3, name : 'Node 1.1', hasChildren:true}]},
            {id:2, name : 'Node 2', hasChildren:true}
        ]
    };

    onExpandChange = (e) => {
        console.debug('e : ', e);

    };

    render() {
        return <React.Fragment>
            <Card title="Tab Component (Dynamic)">
                <TreeView dir="rtl"
                          data={this.state.data}
                          expandIcons={true}
                          textField="name"
                          getHierarchicalIndexById={(arg) => {
                              console.log('getHierarchicalIndexById : ', arg);
                          }}
                          //onItemClick={this.onItemClick}
                          onExpandChange={this.onExpandChange} />
            </Card>
        </React.Fragment>
    }
}

export default TreeComponent