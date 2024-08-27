// each numebr eventually bubbles to it's correct position in the list based on it's value (ascending)

let myNumbers = [100, 99, 4, 1];
let n = 0;


for(let i = 3; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        if(myNumbers[j] > myNumbers[j + 1]) {
            var t = myNumbers[j];
            myNumbers[j] = myNumbers[j + 1];
            myNumbers[j + 1] = t;
        }
    }
    console.log(++n);
}

console.log(myNumbers);