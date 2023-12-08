function maxDistance(movements) {
    let result = 0
    let last

    for (const step of movements) {
        if (step === last || last === undefined || step === '*') {
            result++
            if (last === undefined && step !== '*') {
                last = step
            }
        } else {
            result--
        }

    }

    return result
}
