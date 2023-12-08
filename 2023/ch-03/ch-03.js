function findNaughtyStep(original, modified) {
    let larger = modified
    if (original.length >= modified.length) {
        larger = original
    }

    let i = 0
    for (; i < original.length; i++) {
        if (original[i] !== modified[i]) {
            return larger[i]
        }
    }

    if (original.length !== modified.length) {
        return larger[i]
    }

    return ''
}
