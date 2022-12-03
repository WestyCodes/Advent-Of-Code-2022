const fs = require('fs/promises')
const main = async () => {
    const data = await fs.readFile('elfData.txt', 'utf8')
    // console.log(/[\w]/g.test(data[0]));
    const numberedData = []
    let calories = ''
    const sumOfCalories = []
    // Organising data into single array to alter.
    for (let i = 0; i < data.length; i++) {
        if (/[\w]/g.test(data[i])) {
            calories += (data[i])
        }

        if (/[\w]/g.test(data[i + 1]) === false) {
            if(calories !== '') {
                numberedData.push(Number(calories))
                if (/[\w]/g.test(data[i + 3]) === false) {
                    numberedData.push(' ')
                }
                calories = ''
            } 
        }
    }
    // Adding a space at the end of the array.
    numberedData.push(' ')
    // looping through numberedData to make a new array of sums.
    let miniSum = 0
    for (let i = 0; i < numberedData.length; i++) {
        if(typeof numberedData[i] === 'number') {
            miniSum += numberedData[i]
        }
        if(numberedData[i] === ' ') {
            sumOfCalories.push(miniSum)
            miniSum = 0
        }
    }
    sumOfCalories.sort(function(a, b) {
        return a - b;
    });

    sumOfCalories.reverse()
    let top3 = 0
    top3 = sumOfCalories[0]+sumOfCalories[1]+sumOfCalories[2]
    console.log(top3)
    return top3
    
 }

main()
