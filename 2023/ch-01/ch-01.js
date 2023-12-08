function findFirstRepeated(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        if (gifts.indexOf(gifts[i]) < i) {
            return gifts[i]
        }
    }

    return -1
}
