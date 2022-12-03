const fs = require('fs/promises')
const main = async () => {
    const data = await fs.readFile('./dayTwo/strategy.txt', 'utf8')
    const filteredStrat = data.split('\r\n')
    let totalScore = 0
    // X = lose Y = draw Z = win
    for (let i = 0; i < filteredStrat.length; i++) {
        let fight = filteredStrat[i]
        // loss = 0 draw = 3 win = 6
        if (fight[0] === 'A') {
            // opponent rock
            if (fight[2] === 'X') {
                // you need to lose - scissors
                totalScore += (0 + 3)
            } else if (fight[2] === 'Y') {
                //you need to draw - rock
                totalScore += (3 + 1)
            } else {
                // you need to win - paper
                totalScore += (6 + 2)
            }
        }
        
        if (fight[0] === 'B') {
            // opponent paper
            if (fight[2] === 'X') {
                // you need to lose - rock
                totalScore += 1
            } else if (fight[2] === 'Y') {
                //you need to draw - paper
                totalScore += (3 + 2)
            } else {
                // you need to win - scissors
                totalScore += (6 + 3)
            }
        }

        if (fight[0] === 'C') {
            //opponent scissors
            if (fight[2] === 'X') {
                // you need to lose - paper
                totalScore += (0 + 2)
            } else if (fight[2] === 'Y') {
                //you need to draw - scissors
                totalScore += (3 + 3)
            } else {
                // you need to win - rock
                totalScore += (6 + 1)
            }
        }   
    }
    console.log(totalScore)
    return totalScore 

  

}

main()
