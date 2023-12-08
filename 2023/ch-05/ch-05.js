function cyberReindeer(road, time) {
    const result = [road]
    const barriers = {}

    for (let i = 0; i < road.length; i++) {
        if (road[i] === '|') {
            barriers[i] = true
        }
    }

    let sledPos = 0
    const newRoad = road.split('')
    for (let i = 1; i < time; i++) {
        let nextPos = sledPos + 1

        if (!barriers[nextPos]) {
            newRoad[nextPos] = 'S'
            if (barriers[sledPos] === undefined) {
                newRoad[sledPos] = '.'
            } else {
                newRoad[sledPos] = '*'
            }
            sledPos++
        }

        result.push(newRoad.join(''))

        if (i === 4) {
            for (const key in barriers) {
                barriers[key] = false
                newRoad[key] = '*'
            }
        } 
    }

    return result
}
