import React from 'react';

import {DropDownList} from '@progress/kendo-react-dropdowns';
import {filterBy} from '@progress/kendo-data-query';
import fetchData from './DropdownData';

class KendoDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.dataCaching = [];
        const {itemText, placeholder, searchCharacterLength, pageSize} = this.props;
        this.state = {
            value: {[itemText]: placeholder},
            searchCharacterLength: searchCharacterLength ? searchCharacterLength : 0,
            skip: 0,
            pageSize: pageSize || 10,
            total: 0,
            filter: null
        };
    }

    handleChange = (event) => {
        const {extraValue, onChange} = this.props;
        this.setState({
            value: {...event.target.value, ...extraValue}
        });

        if (onChange) {
            onChange(event.target.value);
        }
    };

    filterChange = (event) => {
        this.getData(event.filter, 0);
        this.setState({
            filter: event.filter
        })
    };

    getData = (filter, skip) => {
        const {fetchUrl, data, itemValue, itemText} = this.props;
        const pageSize = this.state.pageSize;
        // let sk = skip !== undefined ? skip : this.state.skip;
        // console.log('skip ', sk);
        let options = [];
        let total = 0;
        if (fetchUrl) {
            // fetch('../ui/DropdownData.json').then(res => {
            //     console.log(res.json())
            //     return res.json()
            // })
            //     .then(data => {
            const response = fetchData(filter, pageSize, skip);
            options = response.data.map((option, index) => {
                let item = {[itemValue]: option[itemValue], [itemText]: option[itemText]};
                this.dataCaching[index + skip] = item;
                return item;
            });
            total = response.total;
        } else {
            options = filterBy(data.slice(), filter);
            total = data.length;
        }
        console.log('skip-top ', skip)
        console.log('dataCaching-top ', this.dataCaching)
        if (skip === this.state.skip) {
            this.setState({
                data: options,
                total: total,
                // skip: sk
            });
        }
    };

    pageChange = (event) => {
        const skip = event.page.skip;
        const filter = this.state.filter;
        const shouldRequestData = this.shouldRequestData(skip);
        console.log('shouldRequestData ', shouldRequestData);
        if (shouldRequestData) {
            this.getData(filter, skip);
        }
        const data = this.getCachedData(skip);
        // console.log('data ', data)
        //
        this.setState({
            data: data,
            skip: skip
        });
    };

    shouldRequestData(skip) {
        for (let i = 0; i < this.state.pageSize; i++) {
            if (!this.dataCaching[skip + i]) {
                return true;
            }
        }
        return false;
    }

    getCachedData(skip) {
        const data = [];
        console.log('skip-bottom ', skip)
        console.log('dataCaching-bottom ', this.dataCaching)
        for (let i = skip; i < this.state.pageSize; i++) {
            // if (this.dataCaching[i + skip]) {
            data.push(this.dataCaching[i]);
            // }
        }
        console.log('data ', data)
        return data;
    }

    componentDidMount() {
        this.getData(null, 0)
    }

    render() {
        const {itemValue, itemText, filterable, placeholder} = this.props;
        const {data, value} = this.state;
        const aa = {[itemText]: placeholder};
        return (
            <div>
                <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.value)}
                </div>
                <DropDownList
                    data={data}
                    textField={itemText}
                    dataItemKey={itemValue}
                    value={value}
                    onChange={this.handleChange}
                    filterable={filterable}
                    defaultItem={aa}
                    onFilterChange={this.filterChange}
                    virtual={{
                        pageSize: this.state.pageSize,
                        skip: this.state.skip,
                        total: this.state.total
                    }}
                    onPageChange={this.pageChange}
                />
            </div>
        );
    }

}

export default KendoDropdown;

