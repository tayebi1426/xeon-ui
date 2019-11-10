// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
let k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
let k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
let brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
/*function createGridSearchObject(form, options) {

    let result = {};
    let serializer = hash_serializer;

    let elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    let radio_store = Object.create(null);

    for (let i = 0; i < elements.length; ++i) {
        let element = elements[i];

        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        let key = element.name;
        let val = element.value;
        let type = element.type;
        let operator = element.attributes.operator ? element.attributes.operator.value : 'aeq';

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((type === 'checkbox' || type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        // value-less fields are ignored unless options.empty is true
        if (!val) {
            continue;
        }

        // multi select boxes
        if (type === 'select-multiple') {
            val = [];

            let selectOptions = element.options;
            let isSelectedOptions = false;
            for (let j = 0; j < selectOptions.length; ++j) {
                let option = selectOptions[j];
                let allowedEmpty = false;
                // let allowedEmpty = options.empty && !option.value;
                let hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    if (key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value, operator, type);
                    } else {
                        result = serializer(result, key, option.value, operator, type);
                    }
                }
            }

            continue;
        }

        result = serializer(result, key, val, operator, type);
    }

    return result;
}

function parse_keys(string) {
    let keys = [];
    let prefix = /^([^\[\]]*)/;
    let children = new RegExp(brackets);
    let match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    let key = keys.shift();
    let between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        } else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    } else {
        let string = between[1];
        // +let converts the letiable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        let index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        } else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    console.log(result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value)
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}*/

function createGridSearchObject(values, nameAndOperators) {
    let result = {};
}

function serializer(result, key, value, operator, type) {
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
        // console.log('key',key);
        // console.log('value',value);
        // console.log('operator',operator);
        // console.log('type',type);
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
