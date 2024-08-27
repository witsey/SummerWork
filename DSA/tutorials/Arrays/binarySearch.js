let numbers = [2, 3, 7, 7, 11, 15, 25];



function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2);

        if( numbers[middleIndex] == target) {
            return middleIndex;
        }

        else if( numbers[middleIndex] < target)
            left = middleIndex + 1;

        else
            right = middleIndex - 1;
        
    }
    return -1;
}

console.log(binarySearch(numbers, 11));




