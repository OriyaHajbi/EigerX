const numbers = [1, 5, 42, -376, 5, 19, 5, 3, 42, 2, 0];
const min = -Infinity;
const ZERO = 0;


function maxAndCountRecursion(numbers, index, max, count) {
    //get the current num
    const currentNum = numbers[index];

    //check if num equal ZERO
    if (currentNum === ZERO) {
        return { max, count }
    }

    // save the values of max and count
    var newMax = max;
    var newCount = count;
    // check if have a new MAX number and set is count to 1 or if the number equal to the max then i set +1 to the count
    if (currentNum > max) {
        newMax = currentNum;
        newCount = 1;
    } else if (currentNum === max) {
        newCount++;
    }

    return maxAndCountRecursion(numbers, index + 1, newMax, newCount);
}

console.log(maxAndCountRecursion(numbers, 0, min, 0));