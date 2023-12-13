function organizeGifts(gifts) {
    const parsedGifts = []
    let result = ''

    let buff = ''

    for (const c of gifts) {
        if (!isNaN(c)) {
            buff += c
        } else {
            parsedGifts.push({
                number: Number(buff),
                type: c
            })

            buff = ''
        }
    }

    const GIFTSPERBOX = 10
    const BOXESPERPALLET = 5
    for (const gift of parsedGifts) {
        let boxes = Math.floor(gift.number / GIFTSPERBOX)
        gift.number -= boxes * GIFTSPERBOX

        const pallets = Math.floor(boxes / BOXESPERPALLET)
        boxes -= pallets * BOXESPERPALLET

        prepareResult('[]', pallets, gift.type)
        prepareResult('{}', boxes, gift.type)
        prepareResult('()', gift.number, gift.type)
    }

    function prepareResult(symbol, number, giftType) {
        if (number) {
            if (symbol === '()') {
                result += symbol[0]
                for (let i = 0; i < number; i++) {
                    result += giftType
                }
                result += symbol[1]
            } else {
                for (let i = 0; i < number; i++) {
                    result += symbol[0]
                    result += giftType
                    result += symbol[1]
                }
            }
        }
    }

    return result
}
