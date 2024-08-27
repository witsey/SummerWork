let a1 = [1, 2, 3];
let a2 = [2, 5, 6];
let a3 = [];

let i = 0, j = 0;

while(i < a1.length && j < a2.length) {
    if(a1[i] <= a2[j]) {
        a3.push(a1[i]);
        i++;
    } else {
        a3.push(a2[j]);
        j++;
    }
}

console.log(a3);