// testing arrays in js

let myNumbers = [100, 2, 4, 19, 21, -3, 7];
let smallestNumber = myNumbers[2];

// finding the smallest numbber in an array (ex)
for(let i = 0; i < 7; i++) {
    if(myNumbers[i] < smallestNumber) {
        smallestNumber = myNumbers[i];
    }
}

console.log(smallestNumber);