let myNumbers = [9, 2, 50, 15, 13, 19, 25, 3];

for(let i = 1; i < 8; i++) {

    let current_value = myNumbers[i];
    let insert_index = i;
    for(let j = i - 1; j >= 0; j--) {
        if (myNumbers[j] > current_value) { // we keep checking if the values before the current one are smaller 
            myNumbers[j + 1] = myNumbers[j] // if it is, shift the previous value to the current position
            insert_index = j;
        }
        else
            break; // once we find the correct position we stop

    }
    myNumbers[insert_index] = current_value;
}

console.log(myNumbers);