// Recurrsion method
n1 = 0;
n2 = 1;
let n3;

let count = 2;

function febSeq(max) {
    if(count <= max) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
        count++;
        febSeq(max);
    }
    else {return}
}

function nthFebNumber(n) {
    if(n == 0 || n == 1) {return n;}
    return nthFebNumber(n - 2) + nthFebNumber(n - 1);
}


console.log(nthFebNumber(6));