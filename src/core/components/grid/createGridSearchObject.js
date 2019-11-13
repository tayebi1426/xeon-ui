function createGridSearchObject(values, nameAndOperators) {
    let result = {};
    nameAndOperators.forEach(obj => {
        let key = obj.name;
        if (values[key]) {
            result = serialize(result, key, values[key], obj.operator, obj.type);
        }
    });
    return result;
}

function serialize(result, key, value, operator, type) {
    let existing = result[key];
    if (existing) {
        if (!Array.isArray(existing)) {
            result[key] = [existing];
        }
        result[key].push({value: value, operator, type});
    } else {
        result[key] = {value: value, operator, type};
    }
    return result;
}


function addSearchObjectToGridRequest(searchObject, request) {

    var jsonData = [];
    Object.keys(searchObject).forEach(key => {
        let {value, operator, type} = searchObject[key];
        if (type === 'radio' && value === 'off') {
            return;
        }

        if (value && key) {
            if (!operator) operator = 'aeq';
            if (operator === 'in' && !Array.isArray(value)) {
                value = value.trim().split(',');
            }
            jsonData.push({
                field: key,
                value: value,
                advance: true,
                operator: operator
            });
        }
    });

    var filterDescriptor = [];
    jsonData.forEach((value) => {
        filterDescriptor.push(value);
    });

    if (!request.filter) {
        request.filter = {filters: filterDescriptor, logic: "and"};
    } else {
        request.filter.filters = concatOrReplaceFiltersIfNeeded(request.filters, filterDescriptor);
    }

    return request;
}

function concatOrReplaceFiltersIfNeeded(mainFilter, advanceFilter) {
    var reconstructMainFilter = [];
    mainFilter.forEach((key, mainObject) => {
        // eslint-disable-next-line no-prototype-builtins
        if (mainObject.hasOwnProperty('advance')) {
            return true;
        }
        if (advanceFilter.length === 0) {
            reconstructMainFilter.push(mainObject);
        } else {
            advanceFilter.forEach((key2, advanceObject) => {
                //if in advance object exists use it
                if (mainObject['field'] !== advanceObject['field']) {
                    reconstructMainFilter.push(mainObject);
                    return false;
                }
            });
        }
    });
    return reconstructMainFilter.concat(advanceFilter);
}

export {createGridSearchObject, addSearchObjectToGridRequest};
