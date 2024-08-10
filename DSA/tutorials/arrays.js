let myNumbers = [100, 2, 4, 19, 21, -3, 7];
let smallestNumber = myNumbers[2];

for(let i = 0; i < 7; i++) {
    if(myNumbers[i] < smallestNumber) {
        smallestNumber = myNumbers[i];
    }
}

console.log(smallestNumber);