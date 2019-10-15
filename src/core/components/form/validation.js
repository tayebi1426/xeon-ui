import Validator from 'validatorjs';

const validate = (names, prNames, rules) => {
    // if names or prNames or rules === undefined, null,empty,...
    let errors = {};
    let validation = new Validator(names, rules);
    validation.setAttributeNames(prNames);
    if (validation.fails()) {
        for (let name in prNames) {
            errors = {...errors,[name]:validation.errors.first([name])};
        }
    } else {
        errors = false;
    }
    return errors;
};

export default validate;