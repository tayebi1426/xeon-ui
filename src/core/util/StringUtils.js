function concatStrings() {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a.concat(b), '')
}

export {concatStrings}