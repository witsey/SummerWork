let myNumbers = [1, 5, 3, 3, 2, 4, 2, 3];
let countArray = [0, 0, 0, 0, 0, 0];
let sortedNumbers = [];

for(let i = 0; i < myNumbers.length; i++) {
    ++countArray[myNumbers[i]];
}

for(let i = 0; i < countArray.length; i++) {
    for(let j = 0; j < countArray[i]; j++) {
        sortedNumbers.push(i);
    }
}

console.log(sortedNumbers);

