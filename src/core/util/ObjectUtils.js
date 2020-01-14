const DEFAULT_PATH_SEPARATOR = '.';

class ObjectUtils {

    static getValue(object, path) {
        if (!ObjectUtils.isObject(object)) {
            console.error('ObjectUtils.getValue : ',object, path);
            throw new Error('invalid object');
        }
        if (!ObjectUtils.hasText(path)) {
            console.error('ObjectUtils.getValue : ',object, path);
            throw new Error('invalid path');
        }
        let paths = path.split(DEFAULT_PATH_SEPARATOR);
        return paths.reduce((obj, prop) => obj && obj[prop], object);
    }

    static setValue(object, path, value) {
        if (!ObjectUtils.isObject(object)) {
            console.error('ObjectUtils.getValue : ',object, path);
            throw new Error('invalid object');
        }
        if (!ObjectUtils.hasText(path)) {
            console.error('ObjectUtils.getValue : ',object, path);
            throw new Error('invalid path');
        }

        let paths = path.split(DEFAULT_PATH_SEPARATOR);
        return paths.reduce((obj, prop, idx) => {
            obj[prop] = obj[prop] || {};
            if (paths.length === (idx + 1)) {
                obj[prop] = value;
            }
            return obj[prop];
        }, object);
    }

    static hasProperty(object, path, options) {
        if (!ObjectUtils.isObject(object)) {
            throw new Error('invalid object');
        }
        if (!ObjectUtils.hasText(path)) {
            throw new Error('invalid path');
        }
        options = options || {};

        let paths = path.split(".");
        return paths.reduce((obj, prop, idx, array) => {
            if (idx === array.length - 1) {
                if (options.own) {
                    return !!(obj && prop in  obj);
                } else {
                    return !!(obj !== null && ObjectUtils.isObject(obj) && prop in obj);
                }
            }
            return obj && obj[prop];
        }, object);
    }

    static isEvent(e) {
        return typeof e === 'object' && e.target;
    }

    static isObject(object) {
        return object && typeof object === 'object';
    }

    static isNumber(num) {
        return typeof num === 'number';
    }

    static isString(str) {
        return typeof str === 'string';
    }

    static hasText(str) {
        return ObjectUtils.isString(str) && str.trim().length > 0;
    }
}
export default ObjectUtils;