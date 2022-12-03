const fs = require('fs/promises')
const main = async () => {
    const data = await fs.readFile('./dayThree/elfBaggage.txt', 'utf8')
    const dataArray = data.split('\r\n')
    const values = {
        a: 1, b: 2, c: 3,
        d: 4, e: 5, f: 6,
        g: 7, h: 8, i: 9,
        j: 10, k: 11, l: 12,
        m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21,
        v: 22, w: 23, x: 24,
        y: 25, z: 26, A: 27,
        B: 28, C: 29, D: 30,
        E: 31, F: 32, G: 33,
        H: 34, I: 35, J: 36,
        K: 37, L: 38, M: 39,
        N: 40, O: 41, P: 42,
        Q: 43, R: 44, S: 45,
        T: 46, U: 47, V: 48,
        W: 49, X: 50, Y: 51,
        Z: 52
    }

    let sumPriorities = 0
    for (let i = 0; i < dataArray.length; i++) {
        let dALength = dataArray[i].length
        let currentItem = dataArray[i]
        const firstCompartment = []
        const secondCompartment = []
        const duplicate = []
        for (let j = 0; j < dALength; j++) {
            if (j < dALength / 2) {
                firstCompartment.push(currentItem[j])
            } else {
                secondCompartment.push(currentItem[j])
            }
        }
        for (let j = 0; j < secondCompartment.length; j++) {
            let index = firstCompartment.indexOf(secondCompartment[j]);
            if (index > -1) {
                duplicate.push(firstCompartment[index])
            }
        }
        let value = duplicate[0]
        sumPriorities += values[value]
    }
    console.log(sumPriorities)
    return sumPriorities
}

main()