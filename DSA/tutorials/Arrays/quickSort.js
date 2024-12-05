let myNumbers = [9, 2, 50, 15, 13, 19, 25, 3];

function partion(array, l, h) {
    pivot = array[l];
    i = l; j = h; // our 2 pointers 

    while(i < j) {
        do {
            i++;
        } while(array[i] < pivot); // we keep increamenting the i until we find a number that is less than the pivot
        do {
            j--;
        } while(array[j] > pivot); // we keep decreamenting the i until we find a number that is larger than the pivot
        
        [array[i], array[j]] = [array[j], array[i]]; // swap these numbers
    }
    
    [array[l], array[j]] = [array[j], array[l]] // swap the pivot with the current array of j value
    return j; // return the current position for further partitioning in the array
}

function quickSort(array, l = 0 /* first value as pivot variation*/, h = array.length) {
    if(l < h) {
        let j = partion(array, l, h);
        quickSort(array, l, j); // will perform the sorting on the left partition of the array (from 0 -> current position)
        quickSort(array, j + 1, h); // will perform the sorting on the right partition of the array (from current position + 1 -> end of the array)
    }
}

quickSort(myNumbers);
console.log(myNumbers);