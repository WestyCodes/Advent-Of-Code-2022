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

    let totalBadgePoints = 0

    for (let i = 0; i < dataArray.length-1; i+=3) {
        const firstLine = []
        const secondLine = []
        const thirdLine = []
        const arrays = [firstLine, secondLine, thirdLine]
        let currentStringA = dataArray[i]
        let currentStringB = dataArray[i+1]
        let currentStringC = dataArray[i+2]
            for (let j = 0; j < currentStringA.length; j++) {
                firstLine.push(currentStringA[j])  
            }

            for (let k = 0; k < currentStringB.length; k++) {
                secondLine.push(currentStringB[k])  
            }

            for (let l = 0; l < currentStringC.length; l++) {
                thirdLine.push(currentStringC[l])  
            }

        let result = arrays.shift().filter(function(v) {
            return arrays.every(function(a) {
                return a.indexOf(v) !== -1;
            });
        });

        let finalResult = result[0]
        totalBadgePoints += values[finalResult]
    }
    console.log(totalBadgePoints)
}

main()