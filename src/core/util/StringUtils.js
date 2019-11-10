function concatStrings(...args) {
    return args.reduce((a, b) => a.concat(b), '')
}

export {concatStrings}