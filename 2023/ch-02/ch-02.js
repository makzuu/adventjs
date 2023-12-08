function manufacture(gifts, materials) {
    return gifts.filter((gift) => {
        for (const char of gift) {
            if (materials.indexOf(char) < 0) {
                return false
            }
        }
        return true
    })
}
