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

// Complete the playingWithNumbers function below.
function playingWithNumbers(arr, queries) {
    const newArray = [];
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[j] += queries[i];
        }
        newArray.push(arr.reduce((num1, num2) => Math.abs(num1) + Math.abs(num2)))
    }
    // console.log(newArray)
    return newArray
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const q = parseInt(readLine(), 10);

    const queries = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));

    let result = playingWithNumbers(arr, queries);
    ws.write(result.join("\n") + "\n");

    ws.end();
}
