'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumLoss function below.
function minimumLoss(price) {
    const sortPrice = price.concat().sort((a, b) => a - b)
    let min = -1;
    for (let i = 0; i < sortPrice.length; i++) {
        const sell = sortPrice[i]
        const buy = sortPrice[i + 1]
        const currentMin = buy - sell
        if (min < 0) {
            min = currentMin
        }
        if (currentMin < min && price.indexOf(buy) < price.indexOf(sell)) {
            min = currentMin
        }
    }
    return min
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
