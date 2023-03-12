function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction () {
    const i = () => {}
    return i
}

function returnsAnAnonymousFunction () {
    return () => {}
}