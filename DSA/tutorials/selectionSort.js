// finding the smalles number and moving it to the beginning of the list

let myNumbers = [45, 99, 50, 43];


for(let i = 0; i < 4; i++) {
    let minNumber = 1000;
    let minNumberIndex;
    for(let j = i; j < 4; j++) {
        if(myNumbers[j] < minNumber) {
            minNumber = myNumbers[j];
            minNumberIndex = j;
        }
    }
    let t = myNumbers[i];
    myNumbers[i] = myNumbers[minNumberIndex];
    myNumbers[minNumberIndex] = t;
}

console.log(myNumbers);