function decode(message) {
    let decodedMessage = ''
    let buff = ''
    let parenLv = 0

    for (const char of message) {
        if (char === '(') {
            if (parenLv > 0) {
                buff += char
            }
            parenLv++
        } else if (char === ')') {
            if (parenLv > 1) {
                buff += char
            } else {
                decodedMessage += decode(buff).split('').reverse().join('')
                buff = ''
            }
            parenLv--
        } else {
            if (parenLv > 0) {
                buff += char
            } else {
                decodedMessage += char
            }
        }
    }

    return decodedMessage
}
