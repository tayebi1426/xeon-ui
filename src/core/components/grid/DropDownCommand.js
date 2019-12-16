import React from "react";
import {DropDownButton} from '@progress/kendo-react-buttons';
import {I18Massage} from "../common";

function DropDownCommand(props) {

    const {dataItem, dataIndex} = props.rowProps;
    const t = props.translator;

    const itemRender = (commandProps) => {
        const {className, iconSize, icon, title, onClick} = commandProps.item;
        const handelClick = (dataItem) => {
            if (onClick) {
                onClick(dataItem);
            }
        };
        return (
            <span className={className} onClick={e => handelClick(dataItem, dataIndex)} style={{pointerEvents: 'none'}}>
            <I18Massage code={title}/>{/* <Icon code={icon} size={iconSize} mask={['far', 'circle']}/>*/}
        </span>
        );
    };

    let items = React.Children.toArray(props.commands).map((command) => {
        return command.props;
    });

    return <DropDownButton text={t('gridCommandsTitle')} itemRender={itemRender}
                           items={items} /*buttonClass={'gridDropdownCommand'}*/ primary={true}/>;

}

export default DropDownCommand;
